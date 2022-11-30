import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin-prudhvi:Quiz123@cluster0.nlgylru.mongodb.net/ProtradeDB',
    ),
    UserModule,
    AuthModule,
    PortfolioModule,
    TransactionsModule,
  ],
})
export class AppModule {}
