import { generateRandomDate, generateRandomValue, getRandomItem } from './common';
import { GuitarCategory, GuitarValidationParams, STRINGS } from '../cli.constant';
import { Guitar, GuitarCategoryType, MockGuitarDataType, StringsCountType } from '@guitar-shop/types';
import { randomUUID } from 'crypto';

const DIFF = 1;

export function generateGuitar(mockGuitarData: MockGuitarDataType):Guitar {
  const name = getRandomItem<string>(mockGuitarData.names);
  const description = getRandomItem<string>(mockGuitarData.descriptions);
  const imageURL = getRandomItem<string>(mockGuitarData.imageURLs);
  const type = getRandomItem<GuitarCategoryType>(Object.values(GuitarCategory));
  const createdAt = generateRandomDate();
  const article = randomUUID().slice(0,
    generateRandomValue(
      GuitarValidationParams.Article.Length.Minimum,
      GuitarValidationParams.Article.Length.Maximum - DIFF
    )
  );
  const price = generateRandomValue(
    GuitarValidationParams.Price.MinimumValue,
    GuitarValidationParams.Price.MaximumValue,
  );
  const stringsCount = getRandomItem<StringsCountType>([...STRINGS]);

  return {
    name,
    description,
    imageURL,
    type,
    article,
    price,
    stringsCount,
    createdAt,
  };
}
