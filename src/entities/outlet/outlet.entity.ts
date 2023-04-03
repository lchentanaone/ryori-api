/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "outlets"})
export class OutletEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @CreateDateColumn()
    createdAt: Date;
}