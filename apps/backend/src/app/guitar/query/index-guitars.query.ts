import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsIn, IsArray } from 'class-validator';
import {SortByQuery, SortByOrder, GuitarCategoryType, StringsCountType } from '@guitar-shop/types';
import { GUITAR_SORT_BY_FIELDS, GUITAR_SORT_BY_ORDERS, GuitarCategory, STRINGS, DEFAULT_PAGE_NUMBER, DEFAULT_SORT_BY_FIELD, DEFAULT_SORT_BY_ORDER, GuitarValidationMessage } from '../guitar.constant';

export class IndexGuitarsQuery {
  @ApiProperty({
    description: 'Guitar type',
    example: 'electric'
  })
  @IsOptional()
  @IsArray({message: GuitarValidationMessage.Type.NotAnArray})
  @IsIn(Object.values(GuitarCategory), {each: true, message: GuitarValidationMessage.Type.InvalidFormat})
  public type?: GuitarCategoryType[];

  @ApiProperty({
    description: 'Guitar strings count',
    example: '4'
  })
  @IsOptional()
  @IsArray({message: GuitarValidationMessage.StringsCount.NotAnArray})
  @IsIn(STRINGS, {each: true, message: GuitarValidationMessage.StringsCount.InvalidFormat})
  public stringsCount?: StringsCountType[];

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

