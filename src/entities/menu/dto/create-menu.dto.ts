/* eslint-disable prettier/prettier */
import { IsString ,IsInt, IsDate } from '@nestjs/class-validator';
import { Foods } from 'src/entities/foods/food.entity';

export class CreateMenuDto {
    @IsInt()
    id: number;

    @IsString()
    label: string;

    @IsString()
    image: string;

    @IsString()
    food: Foods[];

    @IsString()
    foodId: string

    @IsDate()
    createdAt: Date;
}
