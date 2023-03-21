/* eslint-disable prettier/prettier */
import { IsString ,IsInt, IsDate } from '@nestjs/class-validator';
import { FoodsEntity } from 'src/entities/food/food.entity';

export class CreateMenuDto {
    @IsInt()
    id: number;

    @IsString()
    label: string;

    @IsString()
    image: string;

    @IsString()
    food: FoodsEntity[];

    @IsString()
    foodId: string

    @IsDate()
    createdAt: Date;
}
