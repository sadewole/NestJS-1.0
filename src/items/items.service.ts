import { Injectable, Inject } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(@Inject('ITEM_MODEL') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: object): Promise<Item> {
    const newItem = new this.itemModel(item);
    return newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: object): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
