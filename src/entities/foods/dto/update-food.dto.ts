/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodDto } from './create-food.dto';
import { IsString ,IsInt, IsDate, IsOptional } from '@nestjs/class-validator';
import { MenuCategory } from 'src/entities/menu/menu.entity';

export class UpdateFoodDto extends PartialType(CreateFoodDto) {
    @IsInt()
    id: number;

    @IsString()
    foodName: string;

    @IsString()
    price: string;

    @IsOptional()
    menu: string;

    @IsDate()
    createdAt: Date;
}