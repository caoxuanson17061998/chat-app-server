import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/CreateUserDto';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(@Inject(Services.AUTH) private authService: AuthService) {}

  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
  }

  @Post('login')
  login() {}

  @Get('status')
  status() {}

  @Post('logout')
  logout() {}
}
