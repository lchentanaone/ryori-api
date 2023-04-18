/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  FoodService } from "./food.service";
import { FoodController } from "./food.controller";
import { FoodsRepository } from "./food.repository";
import { MenuCategoryRepository } from "../menu/menu.repository";
import { Foods } from "./food.entity";
import { MenuCategory } from "../menu/menu.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Foods, MenuCategoryRepository, MenuCategory, FoodsRepository])],
    controllers: [FoodController],
    providers: [FoodService],
})

export class FoodModule{}