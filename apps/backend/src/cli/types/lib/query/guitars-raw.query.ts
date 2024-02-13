import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsIn } from 'class-validator';
import {SortByQuery, SortByOrder } from '../../index';
import { GUITAR_SORT_BY_FIELDS, GUITAR_SORT_BY_ORDERS, DEFAULT_PAGE_NUMBER, DEFAULT_SORT_BY_FIELD, DEFAULT_SORT_BY_ORDER, GuitarValidationMessage } from './guitar.constant';

export class GuitarsRawQuery {
  @ApiProperty({
    description: 'Guitar type',
    example: 'electric'
  })
  @IsOptional()
   public type?: string;

  @ApiProperty({
    description: 'Guitar strings count',
    example: '4'
  })
  @IsOptional()
  public stringsCount?: string;

  @ApiProperty({
    description: 'Page number',
    example: '2',
  })
  @IsOptional()
  @Transform(({value}) => +value || DEFAULT_PAGE_NUMBER)
  public page?: number = DEFAULT_PAGE_NUMBER;

  @ApiProperty({
    description: 'SortBy field',
    example: 'price'
  })
  @IsOptional()
  @IsIn(GUITAR_SORT_BY_FIELDS, {message: GuitarValidationMessage.SortByField.InvalidFormat})
  public sortByField?: SortByQuery = DEFAULT_SORT_BY_FIELD;

  @ApiProperty({
    description: 'SortBy order',
    example: 'desc'
  })
  @IsOptional()
  @IsIn(GUITAR_SORT_BY_ORDERS, {message: GuitarValidationMessage.SortByOrder.InvalidFormat})
  public sortByOrder?: SortByOrder = DEFAULT_SORT_BY_ORDER;
}

