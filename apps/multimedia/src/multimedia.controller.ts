import { Controller, Get } from '@nestjs/common';
import { MultimediaService } from './multimedia.service';

@Controller()
export class MultimediaController {
  constructor(private readonly multimediaService: MultimediaService) {}

  @Get()
  getHello(): string {
    return this.multimediaService.getHello();
  }
}
