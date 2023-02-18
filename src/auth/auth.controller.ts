import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { IAuthService } from './auth';
import { CreateUSerDto } from './dtos/CreateUser.dto';
import { Routes, Services } from '../utils/constants';
import { IUSerService } from '../users/user';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USERS) private userService: IUSerService
  ) {}

  @Post('register')
  registerUser(@Body() createUserDto: CreateUSerDto) {
    this.userService.createUser(createUserDto);
  }

  @Post('login')
  login() {}

  @Get('status')
  status() {}

  @Post('logout')
  logout() {}
}
