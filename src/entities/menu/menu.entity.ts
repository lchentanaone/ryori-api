/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,ManyToMany,   BaseEntity } from "typeorm";
import { Foods } from "../foods/food.entity";

@Entity({name: "menu"})
export class MenuCategory extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @Column()
    image: string;

    @ManyToMany(() => Foods, (food) => food.menu)
    food: Foods[];

    @CreateDateColumn()
    createdAt: Date;
}