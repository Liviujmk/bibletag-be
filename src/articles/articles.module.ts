import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ArticlesService } from 'src/articles/articles.service';
import { ArticlesController } from 'src/articles/articles.controller';
import { Article, ArticleSchema } from 'src/articles/article.entity';
import { CollectionsModule } from 'src/collections/collections.module';

@Module({
  imports: [
    CollectionsModule,
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
