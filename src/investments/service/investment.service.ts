import { Injectable, UnauthorizedException } from '@nestjs/common';
import {Repository} from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { InvestmentEntity } from '../entities/investment.entity';

@Injectable()
export class InvestmentService {
    constructor(
        @InjectRepository(InvestmentEntity) private qouteRepository: Repository<InvestmentEntity>
    ) { }

    // get the qoute by id
    async findAll(): Promise<any>{
        return this.qouteRepository.find();
    }


    async findOne(id: number): Promise<InvestmentEntity>{
        return this.qouteRepository.findOne({where: {quote_id: id}})
    }

    // update a quate
    async update(quote_id: number, quote: string): Promise <any>{
        return await this.qouteRepository.update({quote_id}, {quote})
    }

    // create a new qoute Promise<InvestmentEntity>
    async create(qoute: Array<InvestmentEntity>): Promise<any>{
        // console.log(JSON.stringify(qoute)) .save
        return await this.qouteRepository.insert(qoute)
    }

    async delete(id: number, user: any): Promise<any> {
        if (user.role == 'admin') {
            return await this.qouteRepository.delete(id);
        }
        throw new UnauthorizedException();
    }
}
