/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository } from "typeorm";
import { MenuEntity } from "./menu.entity";
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(MenuEntity)
        private menuRepository: Repository<MenuEntity>,
    ) {}

            //Get All User
    findAll(): Promise<MenuEntity[]> {
    return this.menuRepository.find({});
    }

    findOne(id: number): Promise<MenuEntity>{
        const x = this.menuRepository.findOneBy({id});
        return x;
    }

    async create(_menu: CreateMenuDto): Promise<MenuEntity>{
        const menu = new MenuEntity();
        menu.label = _menu.label
        menu.image = _menu.image
        console.log("USERRR", menu)
        return this.menuRepository.save(menu);
    }

    async update(id: number, menu:MenuEntity) {
        await this.menuRepository.update(id, menu)
    }

    async remove(id: number): Promise<void>{
        await this.menuRepository.delete(id);
    }

}