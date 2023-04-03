/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "users"})
export class UsersEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;
}