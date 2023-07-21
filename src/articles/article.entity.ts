import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ default: '', type: String })
  body: string;

  @Prop({
    type: [String],
    default: [],
  })
  collectionName: string[];

  @Prop({
    type: String,
    default: '',
  })
  imageUrl: string;

  @Prop({
    type: Date,
    default: Date.now,
  })
  createdAt: Date;

  @Prop({
    type: Date,
    default: Date.now,
  })
  updatedAt: Date;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
