/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  UserService } from "./user.service";
import { UsersEntity } from "./user.entity";
import { UserController } from "./user.controller";

@Module({
    imports:[TypeOrmModule.forFeature([UsersEntity])],
    controllers: [UserController],
    providers: [UserService],
})

export class UserModule{}