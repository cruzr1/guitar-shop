import { generateRandomValue, getRandomItem } from './common';
import { Guitar, GuitarCategoryType, MockGuitarDataType, StringsCountType } from '@guitar-shop/types';
import { GuitarCategory, GuitarValidationParams, STRINGS } from '../../app/guitar/guitar.constant';
import { randomUUID } from 'crypto';

export function generateGuitar(mockGuitarData: MockGuitarDataType):Guitar {
  const name = getRandomItem<string>(mockGuitarData.names);
  const description = getRandomItem<string>(mockGuitarData.descriptions);
  const imageURL = getRandomItem<string>(mockGuitarData.imageURLs);
  const type = getRandomItem<GuitarCategoryType>(Object.values(GuitarCategory));
  const createdAt = new Date();
  const article = randomUUID().slice(
    GuitarValidationParams.Article.Length.Minimum - 1,
    GuitarValidationParams.Article.Length.Maximum
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
