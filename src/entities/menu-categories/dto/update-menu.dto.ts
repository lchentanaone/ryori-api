/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';
import { IsString ,IsInt, IsDate,IsOptional } from '@nestjs/class-validator';
import { FoodsEntity } from 'src/entities/food/food.entity';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {
    @IsInt()
    id: number;

    @IsString()
    label: string;

    @IsString()
    image: string;

    @IsOptional()
    food: FoodsEntity[];

    @IsString()
    foodId: string;

    @IsDate()
    createdAt: Date;
}