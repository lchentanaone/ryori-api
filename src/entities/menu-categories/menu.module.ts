/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  MenuService } from "./menu.service";
import { MenuEntity } from "./menu.entity";
import { MenuController } from "./menu.controller";

@Module({
    imports:[TypeOrmModule.forFeature([MenuEntity])],
    controllers: [MenuController],
    providers: [MenuService],
})

export class MenuModule{}