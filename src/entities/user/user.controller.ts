/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Param, Body, Delete, Patch, Res,Put } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUserDto } from "../user/dto/update-users.dto";

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

    @Get()
    async fillAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.usersService.findOne(+id);
    }

    @Post()
    create(@Body() createUsersDto: CreateUsersDto) {
        return this.usersService.create(createUsersDto);
        
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
         this.usersService.update(+id, updateUserDto);
         return "Updated"
    }
    // @Put(':id')
    // update(@Param() { id }: FindOneParams, @Body() addressDto: UpdateUserDto) {
    //   return this.usersService.update(id, addressDto);
    // }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.usersService.remove(+id);
      return "Deleted!";
    }
}