/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository } from "typeorm";
import { StoreEntity } from "./store.entity";
import { CreateStoreDto } from './dto/create-store.dto';

@Injectable()
export class StoreService {
    constructor(
        @InjectRepository(StoreEntity)
        private storeRepository: Repository<StoreEntity>,
    ) {}

            //Get All food
    findAll(): Promise<StoreEntity[]> {
    return this.storeRepository.find({});
    }

    findOne(id: number): Promise<StoreEntity>{
        const x = this.storeRepository.findOneBy({id});
        return x;
    }

    async create(_store: CreateStoreDto): Promise<StoreEntity>{
        const store = new StoreEntity();
        store.address = _store.address
        store.storeName = _store.storeName
        return this.storeRepository.save(store);
    }
    
    async update(id: number, store:StoreEntity) {
        await this.storeRepository.update(id, store)
    }

    async remove(id: number): Promise<void>{
        await this.storeRepository.delete(id);
    }

}