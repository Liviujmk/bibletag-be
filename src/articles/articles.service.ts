import { Injectable } from '@nestjs/common';
import { Article, ArticleDocument } from './article.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from './article.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
  ) {}

  async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(createArticleDto);
    return createdArticle.save();
  }

  async getAllArticles(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async getArticleById(id: string): Promise<Article> {
    const article = await this.articleModel.findById(id).exec();
    if (!article) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
    return article;
  }

  async updateArticleById(
    id: string,
    createArticleDto: CreateArticleDto,
  ): Promise<Article> {
    const updatedArticle = await this.articleModel.findByIdAndUpdate(
      id,
      { ...createArticleDto, updatedAt: Date.now() },
      { new: true },
    );
    if (!updatedArticle) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
    return updatedArticle;
  }

  async deleteArticleById(id: string): Promise<Article> {
    const deletedArticle = await this.articleModel.findByIdAndDelete(id);
    if (!deletedArticle) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
    return deletedArticle;
  }
}
