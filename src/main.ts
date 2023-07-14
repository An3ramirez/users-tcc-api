import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { runSeeds } from './db';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const listenPort = 3000;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Notes App')
    .setDescription('Descripción de las API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const datasource = app.get(DataSource);
  await runSeeds(datasource);

  await app.listen(listenPort);
  Logger.log(`Api running on port ${listenPort}`);
}
bootstrap();
