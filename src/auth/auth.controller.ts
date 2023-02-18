import { CreateUSerDto } from './dtos/CreateUser.dto';
import { Routes, Services } from '../utils/type';
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { IAuthService } from './auth';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(@Inject(Services.AUTH) private authService: IAuthService) {}

  @Post('register')
  registerUser(@Body() createUserDto: CreateUSerDto) {
    console.log(createUserDto);
  }

  @Post('login')
  login() {}

  @Get('status')
  status() {}

  @Post('logout')
  logout() {}
}
