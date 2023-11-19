import { Test, TestingModule } from '@nestjs/testing';
import { MultimediaController } from './multimedia.controller';
import { MultimediaService } from './multimedia.service';

describe('MultimediaController', () => {
  let multimediaController: MultimediaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MultimediaController],
      providers: [MultimediaService],
    }).compile();

    multimediaController = app.get<MultimediaController>(MultimediaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(multimediaController.getHello()).toBe('Hello World!');
    });
  });
});
