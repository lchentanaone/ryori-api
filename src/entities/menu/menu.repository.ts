/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { MenuCategory } from './menu.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository(MenuCategory)
export class MenuCategoryRepository extends Repository<MenuCategory> {
  
}