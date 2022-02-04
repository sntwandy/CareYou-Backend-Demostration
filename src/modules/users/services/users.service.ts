/**
 *
 */

import { Injectable } from '@nestjs/common';
import { User } from '../schemas/user.schema';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne({ _id: userId });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async createUser(user: User): Promise<User> {
    return this.usersRepository.create(user);
  }

  async updateUser(userId: string, user: Partial<User>): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ _id: userId }, user);
  }
}
