/* eslint-disable prettier/prettier */
import { IsString ,IsInt, IsDate } from '@nestjs/class-validator';
import { MenuCategoryEntity } from 'src/entities/menu-categories/menu.entity';

export class CreateFoodDto {
    @IsInt()
    id: number;

    @IsString()
    foodName: string;

    @IsString()
    price: string;

    menu:MenuCategoryEntity[]

    @IsDate()
    createdAt: Date;
}
