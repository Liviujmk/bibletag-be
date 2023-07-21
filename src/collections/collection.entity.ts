import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CollectionDocument = HydratedDocument<Collection>;

@Schema()
export class Collection {
  @Prop({ required: true, type: String, unique: true })
  title: string;

  @Prop({ default: '', type: String })
  description: string;

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
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);
