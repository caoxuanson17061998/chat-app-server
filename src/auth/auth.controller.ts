import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/CreateUserDto';
import { UsersService } from 'src/users/users.service';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private authService: AuthService,
    @Inject(Services.USERS) private usersService: UsersService,
  ) {}

  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    this.usersService.createUser(createUserDto);
  }

  @Post('login')
  login() {}

  @Get('status')
  status() {}

  @Post('logout')
  logout() {}
}
