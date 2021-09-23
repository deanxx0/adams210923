import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageSetController } from './image-set.controller';
import { ImageSet, ImageSetSchema } from './image-set.schema';
import { ImageSetService } from './image-set.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: ImageSet.name, schema: ImageSetSchema }])],
  controllers: [ImageSetController],
  providers: [ImageSetService]
})
export class ImageSetModule {}
