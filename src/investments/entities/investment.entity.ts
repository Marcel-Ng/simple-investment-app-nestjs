import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class InvestmentEntity {
    @PrimaryGeneratedColumn()
    quote_id: number;
    @Column()
    quote: string;
    @Column()
    character: string
}
 