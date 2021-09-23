import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class ImageSet {
  @Prop()
  path: string[];
}

export type ImageSetDocument = ImageSet & Document;
export const ImageSetSchema = SchemaFactory.createForClass(ImageSet);
