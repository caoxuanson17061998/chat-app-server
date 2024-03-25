import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Services } from 'src/utils/constants';
import { compareHash } from 'src/utils/helpers';
import { ValidateUserDetails } from 'src/utils/types';

@Injectable()
export class AuthService {
  constructor(
    @Inject(Services.USERS) private readonly usersService: UsersService,
  ) {}

  async validateUser(userDetails: ValidateUserDetails) {
    const user = await this.usersService.findUser({ email: userDetails.email });
    if (!user)
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);
    return compareHash(userDetails.password, user.password);
  }
}
