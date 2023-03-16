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

    findAll(): Promise<UsersEntity[]> {
    return this.usersRepository.find({});
    }
    
    findOne(query: object | any): Promise<UsersEntity>{
        const x = this.usersRepository.findOneBy(query);
        return x;
    }

    async create(_user: CreateUsersDto): Promise<UsersEntity>{
        const user = new UsersEntity();
        user.name = _user.name
        user.lastName = _user.lastName
        user.email = _user.email
        user.password = _user.password
        console.log("USER", user)
        return this.usersRepository.save(user);
    }

    async update(id: number, user:UsersEntity) {
        await this.usersRepository.update(id, user)
    }

    async remove(id: number): Promise<void>{
        await this.usersRepository.delete(id);
    }

}