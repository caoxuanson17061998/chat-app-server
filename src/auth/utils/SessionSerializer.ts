/* eslint-disable @typescript-eslint/ban-types */
import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { Services } from '../../utils/constants';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/utils/entities';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject(Services.AUTH)
    private readonly usersService: UsersService,
  ) {
    super();
  }
  serializeUser(user: User, done: Function) {
    done(null, user);
  }
  async deserializeUser(user: User, done: Function) {
    const userDb = await this.usersService.findUser({ id: user.id });
    return userDb ? done(null, userDb) : done(null, null);
  }
}
