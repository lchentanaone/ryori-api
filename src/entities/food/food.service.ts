/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository } from "typeorm";
import { FoodsEntity } from "./food.entity";
import { CreateFoodDto } from './dto/create-food.dto';

@Injectable()
export class FoodService {
    constructor(
        @InjectRepository(FoodsEntity)
        private foodRepository: Repository<FoodsEntity>,
    ) {}

            //Get All food
    findAll(): Promise<FoodsEntity[]> {
    return this.foodRepository.find({});
    }

    findOne(id: number): Promise<FoodsEntity>{
        const x = this.foodRepository.findOneBy({id});
        return x;
    }

    async create(_food: CreateFoodDto): Promise<FoodsEntity>{
        const food = new FoodsEntity();
        food.foodName = _food.foodName
        food.price = _food.price
        return this.foodRepository.save(food);
    }
    
    async update(id: number, food:FoodsEntity) {
        await this.foodRepository.update(id, food)
    }

    async remove(id: number): Promise<void>{
        await this.foodRepository.delete(id);
    }

}