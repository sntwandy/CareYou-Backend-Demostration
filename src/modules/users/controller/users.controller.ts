/**
 *
 */

import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { User } from '../schemas/user.schema';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() createUser: User): Promise<User> {
    return this.usersService.createUser(createUser);
  }

  @Patch()
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateUser: User,
  ): Promise<User> {
    return this.usersService.updateUser(userId, updateUser);
  }
}
