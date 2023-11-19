import { Module } from '@nestjs/common';
import { MultimediaController } from './multimedia.controller';
import { MultimediaService } from './multimedia.service';

@Module({
  imports: [],
  controllers: [MultimediaController],
  providers: [MultimediaService],
})
export class MultimediaModule {}
