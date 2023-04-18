/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';
import { IsString ,IsInt, IsDate,IsOptional } from '@nestjs/class-validator';
import { Foods } from 'src/entities/foods/food.entity';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {
    id: number;

    @IsString()
    label: string;

    @IsString()
    image: string;

    @IsOptional()
    food: string

    @IsDate()
    createdAt: Date;
}