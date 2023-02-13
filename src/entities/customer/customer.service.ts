/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository } from "typeorm";
import { CustomerEntity } from "./customer.entity";
import { CreateCustomerDto } from './dto/create-customers.dto';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerEntity)
        private customertRepository: Repository<CustomerEntity>,
    ) {}

            //Get All User
    findAll(): Promise<CustomerEntity[]> {
    return this.customertRepository.find({});
    }

    findOne(id: number): Promise<CustomerEntity>{
        const x = this.customertRepository.findOneBy({id});
        return x;
    }

    async create(_customer: CreateCustomerDto): Promise<CustomerEntity>{
        const customer = new CustomerEntity();
        customer.name = _customer.name
        customer.lastName = _customer.lastName
        console.log("USERRR", customer)
        return this.customertRepository.save(customer);
    }

    async update(id: number, customer:CustomerEntity) {
        await this.customertRepository.update(id, customer)
    }

    async remove(id: number): Promise<void>{
        await this.customertRepository.delete(id);
    }

}