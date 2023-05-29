import { 
    Controller, 
    Patch,
    Post, 
    Get, 
    Delete, 
    Param, 
    Request,
    UseGuards,

    Body} from '@nestjs/common';
import { InvestmentService } from '../service/investment.service';
import { InvestmentEntity } from '../entities/investment.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

// import { CreateQouteDto } from '../dto/create-qoute.dto';

@Controller('api/v1/qoute')
export class QouteController {
    constructor(private InvestmentService: InvestmentService){}

    // get all the investmentments created
    @Get('all')
    async GetAllQoute(): Promise<any>{
        return await this.InvestmentService.findAll()
    }

    // get a particular Investment by id
    @Get('single/:id')
    async GetOne(@Param('id') id: number): Promise<any>{
        return await this.InvestmentService.findOne(id)
    }


    // Edit a particular Investment
    @Patch(':id')
    async UpdateQoute(@Param('id') id: number, @Body() Qoute: InvestmentEntity): Promise<any>{
        return await this.InvestmentService.update(id, Qoute.quote)
    }

    // Create a new a new Investment
    @Post()
    async CreateQoute(@Request() req, @Body() qoute: Array<InvestmentEntity>){
        return await this.InvestmentService.create(qoute)
    }

    // Delete an investment
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async Delete(@Param() id: number, @Request() req): Promise<any> {
      return await this.InvestmentService.delete(id, req.user);
   
    }
}
