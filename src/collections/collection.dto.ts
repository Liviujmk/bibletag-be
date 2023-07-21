import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCollectionDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  title: string;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;
}
