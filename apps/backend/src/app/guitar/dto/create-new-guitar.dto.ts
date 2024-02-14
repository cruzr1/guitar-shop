import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches, IsIn, Length, Min, Max } from 'class-validator';
import { GuitarCategoryType, StringsCountType, GuitarCategory, STRINGS, GuitarValidationParams } from '@guitar-shop/types';

export class CreateNewGuitarDto {
  @ApiProperty({
    required: true,
    description: 'The guitar name',
    example: 'Cruz 231X'
  })
  @IsNotEmpty()
  @IsString()
  @Length(
    GuitarValidationParams.Name.Length.Minimum,
    GuitarValidationParams.Name.Length.Maximum
  )
  public name: string;

  @ApiProperty({
    required: true,
    description: 'The guitar description',
    example: 'The brand new guitar on a market'
  })
  @IsNotEmpty()
  @IsString()
  @Length(
    GuitarValidationParams.Description.Length.Minimum,
    GuitarValidationParams.Description.Length.Maximum
  )
  public description: string;

  @ApiProperty({
    required: true,
    description: 'The URL to guitar image',
    example: '/pictures/guitar.jpg'
  })
  @IsNotEmpty()
  @Matches(GuitarValidationParams.Image.RegexURL)
  @IsString()
  public imageURL: string;

  @ApiProperty({
    required: true,
    description: 'The guitar category type',
    example: 'electric'
  })
  @IsNotEmpty()
  @IsIn(Object.values(GuitarCategory), {each: true})
  public type: GuitarCategoryType;

  @ApiProperty({
    required: true,
    description: 'The guitar article',
    example: 'er234jlj34'
  })
  @IsNotEmpty()
  @IsString()
  @Length(
    GuitarValidationParams.Article.Length.Minimum,
    GuitarValidationParams.Article.Length.Maximum
  )
  public article: string;

  @ApiProperty({
    required: true,
    description: 'The guitar price',
    example: '12345'
  })
  @IsNotEmpty()
  @Min(GuitarValidationParams.Price.MinimumValue)
  @Max(GuitarValidationParams.Price.MaximumValue)
  public price: number;

  @ApiProperty({
    required: true,
    description: 'The guitar strings count',
    example: '4'
  })
  @IsNotEmpty()
  @IsIn(STRINGS, {each: true})
  public stringsCount: StringsCountType
}
