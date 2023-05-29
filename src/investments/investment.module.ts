import { Module } from '@nestjs/common';
import { InvestmentService } from './service/investment.service';
import { QouteController } from './controller/invest.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentEntity } from './entities/investment.entity';


@Module({
    imports: [TypeOrmModule.forFeature([InvestmentEntity])],
    providers: [InvestmentService],
    controllers: [QouteController]
})
export class InvestmentModule {}
