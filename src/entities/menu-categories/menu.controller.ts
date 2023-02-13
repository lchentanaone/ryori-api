/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Param, Body, Delete, Patch, Res } from "@nestjs/common";
import { MenuService } from "./menu.service";
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from "../menu-categories/dto/update-menu.dto";

@Controller('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

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
}