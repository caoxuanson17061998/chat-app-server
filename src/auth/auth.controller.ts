import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Routes, Services } from 'src/utils/constants';
import { CreateUserDto } from './dtos/CreateUserDto';
import { LocalAuthGuard } from './utils/Guards';
import { instanceToPlain } from 'class-transformer';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(@Inject(Services.USERS) private usersService: UsersService) {}

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return instanceToPlain(await this.usersService.createUser(createUserDto));
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login() {}

  @Get('status')
  status() {}

  @Post('logout')
  logout() {}
}
