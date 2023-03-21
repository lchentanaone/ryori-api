/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository } from "typeorm";
import { MenuCategoryEntity } from "./menu.entity";
import { CreateMenuDto } from './dto/create-menu.dto';
import { FoodsEntity } from "../food/food.entity";

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(MenuCategoryEntity)
        private menuRepository: Repository<MenuCategoryEntity>,
        @InjectRepository(FoodsEntity)
        private foodRepository: Repository<FoodsEntity>,
    ) {}

            //Get All Userx`
    findAll(): Promise<MenuCategoryEntity[]> {
        return this.menuRepository.find({
            relations: ['food']
        });
        }

        findOne(id: number): Promise<MenuCategoryEntity>{
            return this.menuRepository.findOneBy({id});
        // return x;
    }

    async create(_menu: CreateMenuDto): Promise<MenuCategoryEntity>{
        const menu = new MenuCategoryEntity();
        menu.label = _menu.label
        menu.image = _menu.image
        console.log("menu", menu)
        return this.menuRepository.save(menu);
    }

    async update(id: number, menus:MenuCategoryEntity) {
        const _food = await this.foodRepository.findOne({where: {id: parseInt(menus.foodId)}});
        menus.food = menus.food
        menus.food = [_food]
        await this.menuRepository.update(id, menus)
    }

    async remove(id: number): Promise<void>{
        await this.menuRepository.delete(id);
    }
}