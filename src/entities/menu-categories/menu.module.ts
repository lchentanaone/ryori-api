/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  MenuService } from "./menu.service";
import { MenuCategoryEntity } from "./menu.entity";
import { MenuController } from "./menu.controller";
import { FoodsEntity } from "../food/food.entity";
import { FoodService } from "../food/food.service";

@Module({
    imports:[TypeOrmModule.forFeature([MenuCategoryEntity, FoodsEntity])],
    controllers: [MenuController],
    providers: [MenuService, FoodService],
})

export class MenuModule{}