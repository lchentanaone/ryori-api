/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "stores"})
export class StoreEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address:string;

    @Column()
    storeName:string;

    @CreateDateColumn()
    createdAt: Date;
}