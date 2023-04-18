/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository } from "typeorm";
import { Foods } from "./food.entity";
import { CreateFoodDto } from './dto/create-food.dto';
import { MenuCategory } from "../menu/menu.entity";
import { FoodsRepository } from "./food.repository";
import { MenuCategoryRepository } from "../menu/menu.repository";
import { UpdateFoodDto } from "./dto/update-food.dto";

@Injectable()
export class FoodService {
    constructor(
        @InjectRepository(Foods)
        private foodRepository: FoodsRepository,
        @InjectRepository(MenuCategory)
        private menuRepository: MenuCategoryRepository
    ) {}

    findAll(): Promise<Foods[]> {
    return this.foodRepository.find({
        relations: ['menu']
    });
    }

    async findOne(id: number): Promise<Foods> {
        const x = this.foodRepository.findOne({
            where: {
                id: id
            },
            relations: ['menu'],
        });
        return x;
    }

    async create(_food: CreateFoodDto): Promise<Foods>{
        const food = new Foods();
        food.foodName = _food.foodName
        food.price = _food.price

        const menu = await this.menuRepository.findOne({where: {id: parseInt(_food.menu)}});
        food.menu = [menu];
        console.log({food})
        return this.foodRepository.save(food);
    }

    async update(id: number, updateFoodDto: UpdateFoodDto): Promise<Foods> {
        const food = await this.findOne(id);
        const menu = await this.menuRepository.findOne({where: {id: parseInt(updateFoodDto.menu)}});
        console.log({
            food,
            updateFoodDto
        })
        const { foodName, price } = updateFoodDto;
        food.foodName = foodName;
        food.price = price;
        food.menu = [menu];

        return await food.save();
      }

    async remove(id: number): Promise<void>{
        await this.foodRepository.delete(id);
    }

}