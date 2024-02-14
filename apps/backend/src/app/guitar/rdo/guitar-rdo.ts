import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { GuitarCategoryType, StringsCountType } from '@guitar-shop/types';

export class GuitarRdo {
  @Expose()
  @ApiProperty({
    description: 'The guitar unique Id',
    example: '1234-5678-9123'
  })
  public id?: string;

  @Expose()
  @ApiProperty({
    description: 'The guitar name',
    example: 'Cruz 231X'
  })
  public name: string;

  @Expose()
  @ApiProperty({
    description: 'The guitar description',
    example: 'The brand new guitar on a market'
  })
  public description: string;

  @Expose()
  @Type(() => Date)
  @ApiProperty({
    description: 'The guitar creation date',
    example: '2024-02-08T12:23:34.843Z'
  })
  public createdAt?: Date;

  @Expose()
  @ApiProperty({
    description: 'The URL to guitar image',
    example: '/pictures/guitar.jpg'
  })
  public imageURL: string;

  @Expose()
  @ApiProperty({
    description: 'The guitar category type',
    example: 'electric'
  })
  public type: GuitarCategoryType;

  @Expose()
  @ApiProperty({
    description: 'The guitar article',
    example: 'er234jlj34'
  })
  public article: string;

  @Expose()
  @Type(() => Number)
  @ApiProperty({
    description: 'The guitar price',
    example: '12345'
  })
  public price: number;

  @Expose()
  @ApiProperty({
    description: 'The guitar strings count',
    example: '4'
  })
  public stringsCount: StringsCountType
}

