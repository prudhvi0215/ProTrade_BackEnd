import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stock, StockDocument } from './portfolio.model';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel('stock')
    private readonly stockModel: Model<StockDocument>,
  ) {}

  async getStocks(username: object): Promise<Stock[]> {
      return await this.stockModel.find(username);
  }

  async postStocks(Stock: object): Promise<Stock> {
    return this.stockModel.create(Stock);
  }
}
