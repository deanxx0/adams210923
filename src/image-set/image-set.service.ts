import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ImageSetDto } from './image-set.dto';
import { ImageSet, ImageSetDocument } from './image-set.schema';

@Injectable()
export class ImageSetService {
  constructor(
    @InjectModel(ImageSet.name) private imageSetModel: Model<ImageSetDocument>
  ) {}

  async create(imageSetDto: ImageSetDto): Promise<ImageSetDocument> {
    const createdDoc = new this.imageSetModel(imageSetDto);
    return createdDoc.save();
  }

  async findAll(): Promise<ImageSetDocument[]> {
    return this.imageSetModel.find().exec();
  }
}
