/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm";
import { MenuCategoryEntity } from "../menu-categories/menu.entity";

@Entity({name: "foods"})
export class FoodsEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    foodName:string;

    @Column()
    price:string;

    @ManyToMany(() => MenuCategoryEntity, (menu) => menu.food, { cascade: true, })
    menu: MenuCategoryEntity[];

    @CreateDateColumn()
    createdAt: Date;
}