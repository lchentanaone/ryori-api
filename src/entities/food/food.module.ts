/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  FoodService } from "./food.service";
import { FoodsEntity } from "./food.entity";
import { FoodController } from "./food.controller";

@Module({
    imports:[TypeOrmModule.forFeature([FoodsEntity])],
    controllers: [FoodController],
    providers: [FoodService],
})

export class FoodModule{}