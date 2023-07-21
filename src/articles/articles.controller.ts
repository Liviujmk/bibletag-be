import {
  Controller,
  Body,
  Put,
  Delete,
  Get,
  Post,
  Param,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './article.dto';
import { Article } from './article.entity';
import { Public } from 'src/shared/constants/meta-data';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async createArticle(
    @Body() createArticleDto: CreateArticleDto,
  ): Promise<Article> {
    return this.articlesService.createArticle(createArticleDto);
  }

  @Public()
  @Get()
  async getAllArticles(): Promise<Article[]> {
    return this.articlesService.getAllArticles();
  }

  @Public()
  @Get(':id')
  async getArticleById(@Param('id') id: string): Promise<Article> {
    return this.articlesService.getArticleById(id);
  }

  @Put(':id')
  async updateArticleById(
    @Param('id') id: string,
    @Body() createArticleDto: CreateArticleDto,
  ): Promise<Article> {
    return this.articlesService.updateArticleById(id, createArticleDto);
  }

  @Delete(':id')
  async deleteArticleById(@Param('id') id: string): Promise<Article> {
    return this.articlesService.deleteArticleById(id);
  }
}
