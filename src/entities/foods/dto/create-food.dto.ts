/* eslint-disable prettier/prettier */
import { IsString ,IsInt, IsDate,IsOptional } from '@nestjs/class-validator';
import { MenuCategory } from 'src/entities/menu/menu.entity';

export class CreateFoodDto {
    @IsInt()
    id: number;

    @IsString()
    foodName: string;

    @IsString()
    price: string;

    @IsOptional()
    menu:string;

    @IsDate()
    createdAt: Date;
}
