import { Module } from '@nestjs/common';
import { ImageSetController } from './image-set.controller';
import { ImageSetService } from './image-set.service';

@Module({
  controllers: [ImageSetController],
  providers: [ImageSetService]
})
export class ImageSetModule {}
