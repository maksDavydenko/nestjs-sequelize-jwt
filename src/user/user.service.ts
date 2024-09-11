import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../user/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async addUser(name: string, email: string, phone: string): Promise<User> {
    const user = await this.userModel.create({ name, email, phone });
    console.log('User added:', user);
    return user;
  }

  async getUserById(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }
}
