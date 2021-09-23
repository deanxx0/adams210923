import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageSetModule } from './image-set/image-set.module';

@Module({
  imports: [ImageSetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
