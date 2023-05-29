import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentModule } from './investments/investment.module';
import { AuthModule } from './auth/auth.module';

// Abstract the typeorm config here

@Module({
  imports: [
    InvestmentModule,
    TypeOrmModule.forRoot({
      type :"sqlite",
      database: "qouteDB",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    AuthModule
  ],
})
export class AppModule {}
