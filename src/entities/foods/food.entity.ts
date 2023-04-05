/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm";
import { MenuCategory } from "../menu/menu.entity";

@Entity({name: "foods"})
export class Foods{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    foodName:string;

    @Column()
    price:string;

    @ManyToMany(() => MenuCategory)
    @JoinTable()
    menu: MenuCategory[];

    @CreateDateColumn()
    createdAt: Date;
}