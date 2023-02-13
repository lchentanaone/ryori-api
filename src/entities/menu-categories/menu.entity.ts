/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn } from "typeorm";

@Entity({name: "menu"})
export class MenuEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @Column()
    image: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}