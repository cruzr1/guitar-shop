import { DatabaseClient} from '@guitar-shop/types';
import { Logger, LoggerService } from '@nestjs/common';
import chalk from 'chalk';
import { getErrorMessage } from '../helpers/common';
import { MongoDatabaseClient } from '../mongo.database-client';
import { Command } from './command.interface';
import { GuitarModel, GuitarCLIEntity } from '../helpers/guitar-cli.model';
import { generateGuitar } from '../helpers/create-guitar';
import { mockGuitarData } from '../mocks/mock-guitar-data';


export class GenerateCommand implements Command {

  private databaseClient: DatabaseClient;
  private logger: LoggerService;

  constructor () {
    this.logger = new Logger(GenerateCommand.name);
    this.databaseClient = new MongoDatabaseClient(this.logger);
  }

  getName(): string {
    return '--generate';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [count, uri] = parameters;
    const guitarsCount = Number.parseInt(count, 10);
    await this.databaseClient.connect(uri);
    try {
      for (let i = 0; i < guitarsCount; i++) {
        const item = generateGuitar(mockGuitarData);
        this.logger.log(chalk.green.italic(`Successfully generated guitar data at ${item.createdAt}`));
        const savedGuitar = await new GuitarModel(new GuitarCLIEntity(item)).save();
        savedGuitar.id = savedGuitar._id.toString();
        const {id: guitarId} = await savedGuitar.save();
        this.logger.log(chalk.greenBright.bold(`Successfully imported guitar data into database, id# ${guitarId}`));
      }
    } catch (err: unknown){
      this.logger.error(chalk.bgRed.bold('Cannot load data'));
      this.logger.error(chalk.red.underline(getErrorMessage(err)));
      return;
    } finally {
      this.logger.log(chalk.bgBlueBright.bold(`Total imported ${guitarsCount} records into database. Good luck! 👍`));
      this.databaseClient.disconnect();
    }
  }
}
