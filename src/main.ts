import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  const configService = app.get(ConfigService);
  const APP_PORT = configService.get<number>('APP_PORT', 3000); // Default to 3000 if not set

  console.log('APP_PORT---------------------');
  console.log(APP_PORT);
  console.log(process.env.NODE_ENV);
  console.log(process.env.NODE_ENV !== 'production');

=======
>>>>>>> 9da7de10b4354261d218503e971d0e0bdf0e4e92
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
<<<<<<< HEAD
  await app.listen(APP_PORT || 3000);
=======
  await app.listen(process.env.PORT || 5000);
>>>>>>> 9da7de10b4354261d218503e971d0e0bdf0e4e92
}
bootstrap().catch((err) => {
  console.error('Error during application bootstrap', err);
});
