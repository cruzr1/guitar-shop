import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { BaseMongoRepository, Guitar, PaginationResult, IndexGuitarsQuery, GUITAR_LIST_REQUEST_COUNT, DEFAULT_PAGE_NUMBER } from '@guitar-shop/types';
import { GuitarModel } from './guitar.model';
import { GuitarEntity } from './guitar.entity';

@Injectable()
export class GuitarRepository extends BaseMongoRepository<GuitarEntity, Guitar> {
  constructor(
    @InjectModel(GuitarModel.name) guitarModel: Model<GuitarModel>
  ) {
    super(guitarModel, GuitarEntity.fromObject);
  }

  public async findMany({type, stringsCount, page, sortByField, sortByOrder}: IndexGuitarsQuery): Promise<PaginationResult<GuitarEntity>> {
    const query:FilterQuery<IndexGuitarsQuery> = {};
    if (type) {
      query.type = { $in: type };
    }
    if (stringsCount) {
      query.stringsCount = { $in: stringsCount };
    }
    const skip = (page - DEFAULT_PAGE_NUMBER) * GUITAR_LIST_REQUEST_COUNT;
    const orderBy = {[sortByField]: sortByOrder};
    const [guitarsList, totalGuitars] = await Promise.all([
      this.model.find(query)
        .sort(orderBy)
        .skip(skip)
        .limit(GUITAR_LIST_REQUEST_COUNT)
        .exec(),
      this.model.countDocuments(query).exec()
    ]);
    return {
      entities: guitarsList.map((guitar) => this.createEntityFromDocument(guitar)),
      currentPage: page,
      totalPages: Math.ceil(totalGuitars / GUITAR_LIST_REQUEST_COUNT),
    }
  }
}
