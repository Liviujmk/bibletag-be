import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { CreateCollectionDto } from './collection.dto';
import { Collection } from './collection.entity';
import { Public } from 'src/shared/constants/public-data';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Post()
  async createCollection(
    @Body() createCollectionDto: CreateCollectionDto,
  ): Promise<Collection> {
    return this.collectionsService.createCollection(createCollectionDto);
  }

  @Public()
  @Get()
  async getAllCollections(): Promise<Collection[]> {
    return this.collectionsService.getAllCollections();
  }

  @Public()
  @Get(':name')
  async getCollectionById(@Param('name') name: string): Promise<Collection> {
    return this.collectionsService.getCollectionByName(name);
  }

  @Put(':name')
  async updateCollectionById(
    @Param('name') name: string,
    @Body() createCollectionDto: CreateCollectionDto,
  ): Promise<Collection> {
    return this.collectionsService.updateCollectionByName(
      name,
      createCollectionDto,
    );
  }

  @Delete(':name')
  async deleteCollectionById(@Param('name') name: string): Promise<Collection> {
    return this.collectionsService.deleteCollectionByName(name);
  }
}
