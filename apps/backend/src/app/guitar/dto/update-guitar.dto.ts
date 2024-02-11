import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, Matches, IsIn, Length, Min, Max, IsOptional } from 'class-validator';
import { GuitarCategoryType, StringsCountType } from '@guitar-shop/types';
import { GuitarCategory, STRINGS, GuitarValidationParams } from '../guitar.constant';

export class UpdateGuitarDto {
  @ApiProperty({
    required: true,
    description: 'The guitar name',
    example: 'Cruz 231X'
  })
  @IsOptional()
  @IsString()
  @Length(
    GuitarValidationParams.Name.Length.Minimum,
    GuitarValidationParams.Name.Length.Maximum
  )
  public name: string;

  @ApiProperty({
    description: 'The guitar descrtiption',
    example: 'The brand new guitar on a market'
  })
  @IsOptional()
  @IsString()
  @Length(
    GuitarValidationParams.Description.Length.Minimum,
    GuitarValidationParams.Description.Length.Maximum
  )
  public description: string;

  @ApiProperty({
    description: 'The URL to guitar image',
    example: '/pictures/guitar.jpg'
  })
  @IsOptional()
  @Matches(GuitarValidationParams.Image.RegexURL)
  @IsString()
  public imageURL: string;

  @ApiProperty({
    description: 'The guitar category type',
    example: 'electric'
  })
  @IsOptional()
  @IsArray()
  @IsIn(Object.values(GuitarCategory), {each: true})
  public type: GuitarCategoryType;

  @ApiProperty({
    description: 'The guitar article',
    example: 'er234jlj34'
  })
  @IsOptional()
  @IsString()
  @Length(
    GuitarValidationParams.Article.Length.Minimum,
    GuitarValidationParams.Article.Length.Maximum
  )
  public article: string;

  @ApiProperty({
    description: 'The guitar price',
    example: '12345'
  })
  @IsOptional()
  @Min(GuitarValidationParams.Price.MinimumValue)
  @Max(GuitarValidationParams.Price.MaximumValue)
  public price: number;

  @ApiProperty({
    description: 'The guitar strings count',
    example: '4'
  })
  @IsOptional()
  @IsArray()
  @IsIn(STRINGS, {each: true})
  public stringsCount: StringsCountType
}
