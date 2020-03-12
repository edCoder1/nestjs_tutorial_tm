import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsSampleController } from './items-sample/items-sample.controller';

@Module({
  imports: [],
  controllers: [AppController, ItemsSampleController],
  providers: [AppService],
})
export class AppModule {}
