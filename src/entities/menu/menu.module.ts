/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  MenuService } from "./menu.service";
import { MenuController } from "./menu.controller";
import { FoodService } from "../foods/food.service";
import { MenuCategoryRepository } from "./menu.repository";
import { FoodsRepository } from "../foods/food.repository";
import { MenuCategory } from "./menu.entity";
import { Foods } from "../foods/food.entity";

@Module({
    imports:[TypeOrmModule.forFeature([MenuCategory, Foods, FoodsRepository, MenuCategoryRepository])],
    controllers: [MenuController],
    providers: [MenuService, FoodService],
})

export class MenuModule{}