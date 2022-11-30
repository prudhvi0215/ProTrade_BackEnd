import { Controller, Get, Post, Body, Headers } from '@nestjs/common';
import { Transaction } from './transactions.model';
import { TransactionsService } from './transactions.service';

@Controller('dashboard/portfolio')
export class TransactionsController {
  constructor(private TransactionsService: TransactionsService) {}

  @Get('/transactions')
  async getAllTransactions(
    @Headers('username') username: string,
  ): Promise<Transaction[]> {
    return await this.TransactionsService.getTransactions({
      username: username,
    });
  }

  @Post('/createTransactions')
  async createTransactions(@Body('transaction') transaction: object): Promise<any> {
    return await this.TransactionsService.postTransactions(transaction);
  }
}
