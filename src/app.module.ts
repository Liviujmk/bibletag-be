import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import { ArticlesModule } from 'src/articles/articles.module';
import { CollectionsModule } from 'src/collections/collections.module';
import { configOptions } from 'src/shared/config/app.config.options';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { AuthModule } from 'src/auth/guards/auth.module';

@Module({
  imports: [
    AuthModule,
    ArticlesModule,
    CollectionsModule,
    MongooseModule.forRoot(configOptions.MONGO_URI),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
