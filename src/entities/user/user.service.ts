/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository } from "typeorm";
import { UsersEntity } from "./user.entity";
import { CreateUsersDto } from './dto/create-users.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>,
    ) {}

            //Get All User
    findAll(): Promise<UsersEntity[]> {
    return this.usersRepository.find({});
    }

    findOne(id: number): Promise<UsersEntity>{
        const x = this.usersRepository.findOneBy({id});
        return x;
    }

    async create(_user: CreateUsersDto): Promise<UsersEntity>{
        const user = new UsersEntity();
        user.name = _user.name
        user.lastName = _user.lastName
        console.log("USERRR", user)
        return this.usersRepository.save(user);
    }

    async update(id: number, user:UsersEntity) {
        await this.usersRepository.update(id, user)
    }

    async remove(id: number): Promise<void>{
        await this.usersRepository.delete(id);
    }

}