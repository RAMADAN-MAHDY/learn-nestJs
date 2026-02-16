import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const APP_PORT = configService.get<number>('APP_PORT', 3000); // Default to 3000 if not set

  console.log('APP_PORT---------------------');
  console.log(APP_PORT);
  console.log(process.env.NODE_ENV);
  console.log(process.env.NODE_ENV !== 'production');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(APP_PORT || 3000);
}
bootstrap().catch((err) => {
  console.error('Error during application bootstrap', err);
});
