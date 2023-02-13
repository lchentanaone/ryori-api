/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';
import { IsString ,IsInt, IsDate } from '@nestjs/class-validator';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {
    @IsInt()
    id: number;

    @IsString()
    label: string;

    @IsString()
    image: string;

    @IsDate()
    createdAt: Date;
}