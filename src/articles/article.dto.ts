import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  title: string;

  @IsString()
  body: string;

  @IsString({ each: true })
  collectionName: string[];

  @IsString()
  imageUrl: string;
}
