import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { configOptions } from './shared/config/app.config.options';
import {
  allowMultipleOrigins,
  corsOptions,
} from './shared/config/cors.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors(corsOptions);
  app.use(allowMultipleOrigins);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(configOptions.PORT, () => {
    console.log('Listening on port 3500. Go to http://localhost:3500/');
  });
}
bootstrap();
