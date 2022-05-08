import { Entity,  PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class TransactionEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    createdOn: string

    @Column('text')
    amount: string

    @Column('text')
    asset: string

}

