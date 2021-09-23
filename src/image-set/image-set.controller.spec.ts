import { Test, TestingModule } from '@nestjs/testing';
import { ImageSetController } from './image-set.controller';

describe('ImageSetController', () => {
  let controller: ImageSetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageSetController],
    }).compile();

    controller = module.get<ImageSetController>(ImageSetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
