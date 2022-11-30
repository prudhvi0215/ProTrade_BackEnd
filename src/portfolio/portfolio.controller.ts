import { Controller, Get, Post, Body, Headers } from '@nestjs/common';
import { Stock } from './portfolio.model';
import { PortfolioService } from './portfolio.service';

@Controller('dashboard/portfolio')
export class PortfolioController {
  constructor(private portfolioService: PortfolioService) {}

  @Get('/stocks')
  async getAllStocks(@Headers('username') username: string): Promise<Stock[]> {
    return await this.portfolioService.getStocks({ username: username });
  }

  @Post('/createStocks')
  async createQuestions(@Body('stock') stock: object): Promise<any> {
    return await this.portfolioService.postStocks(stock);
  }
}
