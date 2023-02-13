/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodDto } from './create-food.dto';
import { IsString ,IsInt, IsDate } from '@nestjs/class-validator';

export class UpdateFoodDto extends PartialType(CreateFoodDto) {
    @IsInt()
    id: number;

    @IsString()
    foodName: string;

    @IsString()
    price: string;

    @IsDate()
    createdAt: Date;
}