import { Injectable } from '@nestjs/common';

@Injectable()
export class MultimediaService {
  getHello(): string {
    return 'Hello World!';
  }
}
