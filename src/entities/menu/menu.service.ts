/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MenuCategory } from "./menu.entity";
import { CreateMenuDto } from './dto/create-menu.dto';
import { Foods } from "../foods/food.entity";
import { MenuCategoryRepository } from "./menu.repository";
import { FoodsRepository } from "../foods/food.repository";
import { UpdateMenuDto } from "./dto/update-menu.dto";

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(MenuCategory)
        private menuRepository: MenuCategoryRepository,
        @InjectRepository(Foods)
        private foodRepository: FoodsRepository
    ) {}
    
    findAll(): Promise<MenuCategory[]> {
        return this.menuRepository.find({
            relations: ['food']
        });
    }

    async findOne(id: number): Promise<MenuCategory> {
        const x = this.menuRepository.findOne({
            where: {
                id: id
            },
            relations: ['food'],
        });
        return x;
    }

    async create(_menu: CreateMenuDto): Promise<MenuCategory>{
        const menu = new MenuCategory();
        menu.label = _menu.label
        menu.image = _menu.image

        const food = await this.foodRepository.findOne({where: {id: parseInt(_menu.food)}});
        menu.food = [food];
        console.log({food})

        return this.menuRepository.save(menu);
    }

    async update(id: number, updateMenuDto: UpdateMenuDto): Promise<MenuCategory> {
        const menu = await this.findOne(id);
        const food = await this.foodRepository.findOne({where: {id: parseInt(updateMenuDto.food)}});
        console.log({
            menu,
            updateMenuDto
        })
        const { label, image } = updateMenuDto;
        menu.label = label;
        menu.image = image;
        menu.food = [food];

        return await menu.save();
      }

    async remove(id: number): Promise<void>{
        await this.menuRepository.delete(id);
    }
}