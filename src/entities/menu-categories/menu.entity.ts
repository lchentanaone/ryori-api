/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,ManyToMany, JoinTable } from "typeorm";
import { FoodsEntity } from "../food/food.entity";

@Entity({name: "menu"})
export class MenuCategoryEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @Column()
    image: string;

    @Column()
    foodId: string
    
    @ManyToMany(() => FoodsEntity, (food) => food.menu)
    @JoinTable()
    food: FoodsEntity[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}