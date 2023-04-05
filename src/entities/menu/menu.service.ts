/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository } from "typeorm";
import { MenuCategory } from "./menu.entity";
import { CreateMenuDto } from './dto/create-menu.dto';
import { Foods } from "../foods/food.entity";
import { MenuCategoryRepository } from "./menu.repository";
import { FoodsRepository } from "../foods/food.repository";

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(MenuCategory)
        private menuRepository: MenuCategoryRepository,
        @InjectRepository(Foods)
        private foodRepository: FoodsRepository
    ) {}

            //Get All Userx`
    findAll(): Promise<MenuCategory[]> {
        return this.menuRepository.find({
            relations: ['food']
        });
        }

        findOne(id: number): Promise<MenuCategory>{
            return this.menuRepository.findOneBy({id});
        // return x;
    }

    async create(_menu: CreateMenuDto): Promise<MenuCategory>{
        const menu = new MenuCategory();
        menu.label = _menu.label
        menu.image = _menu.image

        // const _food = await this.foodRepository.findOne({where: {id: parseInt(menu.foodId)}});
        // menu.food = menu.food
        // menu.food = [_food]
        // console.log("menu", menu)
        return this.menuRepository.save(menu);
    }

    async update(id: number, menus:MenuCategory) {
        const _food = await this.foodRepository.findOne({where: {id: parseInt(menus.foodId)}});
        // menus.food = menus.food
        // menus.food = [_food]
        await this.menuRepository.update(id, menus)
    }

    async remove(id: number): Promise<void>{
        await this.menuRepository.delete(id);
    }
}