import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockSchema } from './portfolio.model';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'stock', schema: StockSchema }]),
  ],
  providers: [PortfolioService],
  controllers: [PortfolioController],
})
export class PortfolioModule {}
