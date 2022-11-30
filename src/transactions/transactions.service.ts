import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction, TransactionDocument } from './transactions.model';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel('transaction')
    private readonly stockModel: Model<TransactionDocument>,
  ) {}

  async getTransactions(username: object): Promise<Transaction[]> {
    return await this.stockModel.find(username);
  }

  async postTransactions(transaction: object): Promise<Transaction> {
    return this.stockModel.create(transaction);
  }
}
