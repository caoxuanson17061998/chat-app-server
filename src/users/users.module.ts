import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { Services } from 'src/utils/constants';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: Services.USERS,
      useClass: UsersService,
    },
  ],
  exports: [
    {
      provide: Services.USERS,
      useClass: UsersService,
    },
  ],
})
export class UsersModule {}
