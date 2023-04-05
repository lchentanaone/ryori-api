/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,ManyToMany, JoinTable } from "typeorm";
import { Foods } from "../foods/food.entity";

@Entity({name: "menu"})
export class MenuCategory{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @Column()
    image: string;

    @Column()
    foodId: string
    
    // @ManyToMany(() => Foods)
    // @JoinTable()
    // food: Foods[];

    @CreateDateColumn()
    createdAt: Date;
}