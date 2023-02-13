/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository } from "typeorm";
import { OutletEntity } from "./outlet.entity";
import { CreateOutletDto } from './dto/create-outlet.dto';

@Injectable()
export class OutletService {
    constructor(
        @InjectRepository(OutletEntity)
        private outletRepository: Repository<OutletEntity>,
    ) {}

            //Get All User
    findAll(): Promise<OutletEntity[]> {
    return this.outletRepository.find({});
    }

    findOne(id: number): Promise<OutletEntity>{
        const x = this.outletRepository.findOneBy({id});
        return x;
    }

    async create(_outlet: CreateOutletDto): Promise<OutletEntity>{
        const outlet = new OutletEntity();
        outlet.name = _outlet.name
        outlet.address = _outlet.address
        console.log("USERRR", outlet)
        return this.outletRepository.save(outlet);
    }

    async update(id: number, outlet:OutletEntity) {
        await this.outletRepository.update(id, outlet)
    }

    async remove(id: number): Promise<void>{
        await this.outletRepository.delete(id);
    }

}