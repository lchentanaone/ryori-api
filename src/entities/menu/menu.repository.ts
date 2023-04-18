/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { MenuCategory } from './menu.entity';
import { Injectable } from '@nestjs/common';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
@EntityRepository(MenuCategory)
export class MenuCategoryRepository extends Repository<MenuCategory> {

}