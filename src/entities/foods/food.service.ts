/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository } from "typeorm";
import { Foods } from "./food.entity";
import { CreateFoodDto } from './dto/create-food.dto';
import { MenuCategory } from "../menu/menu.entity";
import { FoodsRepository } from "./food.repository";
import { MenuCategoryRepository } from "../menu/menu.repository";

@Injectable()
export class FoodService {
    constructor(
        @InjectRepository(Foods)
        private foodRepository: FoodsRepository,
        @InjectRepository(MenuCategory)
        private menuRepository: MenuCategoryRepository
    ) {}

            //Get All food
    findAll(): Promise<Foods[]> {
    return this.foodRepository.find({});
    }

    findOne(id: number): Promise<Foods>{
        const x = this.foodRepository.findOneBy({id});
        return x;
    }

    async create(_food: CreateFoodDto): Promise<Foods>{
        const food = new Foods();
        food.foodName = _food.foodName
        food.price = _food.price

        const menu = await this.menuRepository.findOne({where: {id: parseInt(_food.menu)}});
        // console.log({menu})
        food.menu = [menu];
        console.log({food})
        return this.foodRepository.save(food);
    }
    
    async update(id: number, food:Foods) {
        await this.foodRepository.update(id, food)
    }

    async remove(id: number): Promise<void>{
        await this.foodRepository.delete(id);
    }

}