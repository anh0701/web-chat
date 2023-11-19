import { NestFactory } from '@nestjs/core';
import { MultimediaModule } from './multimedia.module';

async function bootstrap() {
  const app = await NestFactory.create(MultimediaModule);
  await app.listen(3000);
}
bootstrap();
