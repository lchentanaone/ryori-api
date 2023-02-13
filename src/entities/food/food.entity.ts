/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "foods"})
export class FoodsEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    foodName:string;

    @Column()
    price:string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}