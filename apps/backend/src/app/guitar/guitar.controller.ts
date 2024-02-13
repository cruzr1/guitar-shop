import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Controller, HttpStatus, HttpCode, Post, Body, Param, Get, UseGuards, Patch, Delete, Query} from '@nestjs/common';
import {CheckAuthGuard} from '../guards/check-auth.guard'
import { GuitarService } from './guitar.service';
import { CreateNewGuitarDto } from './dto/create-new-guitar.dto';
import { GuitarRdo } from './rdo/guitar-rdo';
import { fillDTO, adaptDataToService} from '@guitar-shop/helpers';
import { IndexGuitarsQuery, EntitiesWithPaginationRdo, GuitarsRawQuery } from '@guitar-shop/types';
import { UpdateGuitarDto } from './dto/update-guitar.dto';


@ApiTags('guitat')
@Controller('guitar')
export class GuitarController {
  constructor(
    private readonly guitarService: GuitarService,
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new guitar has been created.'
  })
  @UseGuards(CheckAuthGuard)
  @Post('/')
  public async create(
    @Body() dto: CreateNewGuitarDto,
  ): Promise<GuitarRdo> {
    const newGuitar = await this.guitarService.createNewGuitar(dto);
    return fillDTO(GuitarRdo, newGuitar.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The following guitars have been found.'
  })
  @UseGuards(CheckAuthGuard)
  @Get('/')
  public async index(@Query() query?: GuitarsRawQuery): Promise<EntitiesWithPaginationRdo<GuitarRdo>> {
    const newQuery: IndexGuitarsQuery = adaptDataToService(query);
    const guitarsWithPagination = await this.guitarService.indexGuitars(newQuery);
    return {
      ...guitarsWithPagination,
      entities: guitarsWithPagination.entities.map((guitar) => fillDTO(GuitarRdo, guitar.toPOJO()))
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The guitar details have been provided.'
  })
  @Get(':guitarId')
  public async show(@Param('guitarId') guitarId: string): Promise<GuitarRdo> {
    const existGuitar = await this.guitarService.getGuitarEntity(guitarId);
    return fillDTO(GuitarRdo, existGuitar.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The guitar has been updated.'
  })
  @UseGuards(CheckAuthGuard)
  @Patch(':guitarId')
  public async update(
    @Param('guitarId') guitarId: string,
    @Body() dto: UpdateGuitarDto
  ): Promise<GuitarRdo> {
    const updatedGuitar = await this.guitarService.updateGuitarEntity(guitarId, dto);
    return fillDTO(GuitarRdo, updatedGuitar.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The guitar has been deleted.'
  })
  @UseGuards(CheckAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':guitarId')
  public async delete(
    @Param('guitarId') guitarId: string,
  ): Promise<void> {
    await this.guitarService.deleteGuitarEntity(guitarId);
  }


}
