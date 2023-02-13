/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StoreEntity } from "./store.entity";
import {  StoreService } from "./store.service";
import { StoreController } from "./store.controller";

@Module({
    imports:[TypeOrmModule.forFeature([StoreEntity])],
    controllers: [StoreController],
    providers: [StoreService],
})

export class StoreModule{}