/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Param, Body, Delete, Patch, Res, forwardRef, Inject } from "@nestjs/common";
import { MenuService } from "./menu.service";
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from "../menu-categories/dto/update-menu.dto";
import { FoodService } from "../food/food.service";
import { Repository } from "typeorm";
import { MenuCategoryEntity } from "./menu.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Controller('menu-category')
export class MenuController {
  constructor(private menuService: MenuService,
    @Inject(forwardRef(() => FoodService))
    private readonly foodService: FoodService,
    @InjectRepository(MenuCategoryEntity)
    private menuReposiry: Repository<MenuCategoryEntity>) {}

    @Get()
    async fillAll() {
        return this.menuService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.menuService.findOne(+id);
    }

    @Post()
    create(@Body() createMenuDto: CreateMenuDto) {
        return this.menuService.create(createMenuDto);
        
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
         this.menuService.update(+id, updateMenuDto);
         return "Updated"
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.menuService.remove(+id);
      return "Deleted!";
    }

    
    // @Post('/enrolltosubject')
    // async enrollToSubject(@Body() { menuId, foodId}) {
    //   const menu = await this.menuService.findOne(+menuId);
    //   const food = await this.foodService.findOne(+foodId);
    //   menu.food = [food]
    //   food.menu = [menu]
    //   return this.menuReposiry.save(menu)
    // }
}