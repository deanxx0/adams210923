import { Test, TestingModule } from '@nestjs/testing';
import { ImageSetService } from './image-set.service';

describe('ImageSetService', () => {
  let service: ImageSetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageSetService],
    }).compile();

    service = module.get<ImageSetService>(ImageSetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
