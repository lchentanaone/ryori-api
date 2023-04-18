/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, BaseEntity} from "typeorm";
import { MenuCategory } from "../menu/menu.entity";

@Entity({name: "foods"})
export class Foods extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    foodName:string;

    @Column()
    price:string;

    @ManyToMany(() => MenuCategory, (menu) => menu.food, { cascade: true, })
    @JoinTable()
    menu: MenuCategory[];

    @CreateDateColumn()
    createdAt: Date;
}