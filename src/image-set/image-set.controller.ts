import { Body, Controller, Get, Post } from '@nestjs/common';
import { ImageSetDto } from './image-set.dto';
import { ImageSetDocument } from './image-set.schema';
import { ImageSetService } from './image-set.service';

@Controller('image-set')
export class ImageSetController {
  constructor(private imageSetService: ImageSetService) {}

  @Post()
  async create(@Body() imageSetDto: ImageSetDto): Promise<ImageSetDocument> {
    return this.imageSetService.create(imageSetDto);
  }

  @Get()
  async findAll(): Promise<ImageSetDocument[]> {
    return this.imageSetService.findAll();
  }
}
