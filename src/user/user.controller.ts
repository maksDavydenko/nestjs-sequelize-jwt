import { Controller, Post, Get, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';

@Controller('api/v1')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('add-user')
  async addUser(@Body() body: { name: string; email: string; phone: string }) {
    const { name, email, phone } = body;
    return this.userService.addUser(name, email, phone);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get-user/:id')
  async getUser(@Param('id') id: string) {
    return this.userService.getUserById(+id);
  }
}
