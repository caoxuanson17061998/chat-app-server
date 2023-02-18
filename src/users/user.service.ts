import { Injectable } from '@nestjs/common';
import { IUSerService } from './user';
import { CreateUserDetails } from 'src/utils/types';

@Injectable()
export class UserService implements IUSerService {
  createUser(userDetails: CreateUserDetails) {
    console.log(userDetails);
  }
}
