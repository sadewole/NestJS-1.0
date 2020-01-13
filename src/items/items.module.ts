import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { DatabaseModule } from '../database/database.module';
import { itemsProviders } from './items.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ItemsController],
  providers: [ItemsService, ...itemsProviders]
})
export class ItemsModule {}
