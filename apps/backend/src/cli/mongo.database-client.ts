import * as Mongoose from 'mongoose';
import { LoggerService } from '@nestjs/common';
import { setTimeout } from 'node:timers/promises';
import { DatabaseClient } from '@guitar-shop/types';
import {injectable, inject} from 'inversify'

const RETRY_COUNT = 5;
const RETRY_TIMEOUT = 1000;

@injectable()
export class MongoDatabaseClient implements DatabaseClient {
  private isConnected: boolean;
  private mongoose: typeof Mongoose;

  constructor(
    @inject(Symbol.for('logger')) private readonly logger: LoggerService
  ) {
    this.isConnected = false;
  }

  public getConnectionStatus() {
    return this.isConnected;
  }

  private checkConnectionStatus(status: boolean): void {
    if (status !== this.isConnected) {
      throw new Error(
        this.isConnected ?
          'MongoDB client already connected to the database' :
          'Not connected to the database'
      );
    }
  }

  private changeConnectionStatus() {
    this.isConnected = !this.isConnected;
  }

  public async connect(uri: string): Promise<void> {
    this.checkConnectionStatus(false);
    this.logger.log('Trying to connect to MongoDB...');
    let attempt = 0;
    while (attempt < RETRY_COUNT) {
      try {
        this.mongoose = await Mongoose.connect(uri);
        this.changeConnectionStatus();
        this.logger.log('Database connection established');
        return;
      } catch (err) {
        attempt++;
        this.logger.warn(`Failed to connect MongoDB. Reconnecting (attempt ${attempt} of ${RETRY_COUNT}) ...`);
        await setTimeout(RETRY_TIMEOUT);
      }
    }
    throw new Error(`Unable to establish database connection after ${RETRY_COUNT} attempts. Please try again later`);
  }

  public async disconnect(): Promise<void> {
    this.checkConnectionStatus(true);
    this.logger.log('Disconnecting from the database...');
    await this.mongoose.disconnect?.();
    this.changeConnectionStatus();
    this.logger.log('Database connection closed');
  }
}
