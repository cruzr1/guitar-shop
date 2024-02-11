import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { PaginationResult } from '@guitar-shop/types';
import { GuitarEntity } from './guitar.entity';
import { CreateNewGuitarDto } from './dto/create-new-guitar.dto';
import { IndexGuitarsQuery} from './query/index-guitars.query';
import { UpdateGuitarDto } from './dto/update-guitar.dto';
import { GuitarRepository } from './guitar.repository';
import { GuitarExceptionMessage } from './guitar.constant';


@Injectable()
export class GuitarService {
  constructor(
    private readonly guitarRepository: GuitarRepository,
  ) {}

  public async createNewGuitar(dto: CreateNewGuitarDto): Promise<GuitarEntity> {
    const newGuitar = new GuitarEntity(dto);
    return await this.guitarRepository.save(newGuitar);
  }

  public async getGuitarEntity(guitarId: string): Promise<GuitarEntity> {
    const existGuitar = await this.guitarRepository.findById(guitarId);
    if (!existGuitar) {
      throw new NotFoundException(GuitarExceptionMessage.GuitarNotFound);
    }
    return existGuitar;
  }

  public async updateGuitarEntity(guitarId: string, dto: UpdateGuitarDto): Promise<GuitarEntity> {
    const existGuitar = await this.getGuitarEntity(guitarId);
    const updateGuitar = new GuitarEntity({...existGuitar, ...dto});
    return await this.guitarRepository.update(guitarId, updateGuitar);
  }


  public async deleteGuitarEntity(guitarId: string): Promise<void> {
    const existGuitar = await this.getGuitarEntity(guitarId);
    await this.guitarRepository.deleteById(existGuitar.id);
  }

  public async indexGuitars(query?: IndexGuitarsQuery): Promise<PaginationResult<GuitarEntity>> {
    return await this.guitarRepository.findMany(query);
 }

}
