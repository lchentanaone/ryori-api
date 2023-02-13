/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  OutletService } from "./outlet.service";
import { OutletEntity } from "./outlet.entity";
import { OutletController } from "./outlet.controller";

@Module({
    imports:[TypeOrmModule.forFeature([OutletEntity])],
    controllers: [OutletController],
    providers: [OutletService],
})

export class OutletModule{}