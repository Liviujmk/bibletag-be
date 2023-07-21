import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  CollectionDocument,
  Collection,
} from 'src/collections/collection.entity';
import { CreateCollectionDto } from 'src/collections/collection.dto';

@Injectable()
export class CollectionsService {
  constructor(
    @InjectModel(Collection.name)
    private collectionModel: Model<CollectionDocument>,
  ) {}

  async createCollection(
    createCollectionDto: CreateCollectionDto,
  ): Promise<Collection> {
    const createdCollection = new this.collectionModel(createCollectionDto);
    return createdCollection.save();
  }

  async getAllCollections(): Promise<Collection[]> {
    return this.collectionModel.find().exec();
  }

  async getCollectionByName(name: string): Promise<Collection> {
    const collection = await this.collectionModel
      .findOne({ title: name })
      .exec();
    if (!collection) {
      throw new HttpException('Collection not found', HttpStatus.NOT_FOUND);
    }
    return collection;
  }

  async updateCollectionByName(
    name: string,
    createCollectionDto: CreateCollectionDto,
  ): Promise<Collection> {
    const updatedCollection = await this.collectionModel.findOneAndUpdate(
      { title: name },
      createCollectionDto,
      { new: true },
    );
    if (!updatedCollection) {
      throw new HttpException('Collection not found', HttpStatus.NOT_FOUND);
    }
    return updatedCollection;
  }

  async deleteCollectionByName(name: string): Promise<Collection> {
    const deletedCollection = await this.collectionModel.findOneAndDelete({
      title: name,
    });
    if (!deletedCollection) {
      throw new HttpException('Collection not found', HttpStatus.NOT_FOUND);
    }
    return deletedCollection;
  }
}
