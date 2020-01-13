import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/database/database.module';
import { userProvider } from './user.provider';
import { JwtModule } from '@nestjs/jwt';
import 'dotenv/config';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: process.env.jwtSecret,
      signOptions: { expiresIn: '3600s' }
    })
  ],
  controllers: [UserController],
  providers: [UserService, ...userProvider],
  exports: [UserService]
})
export class UserModule {}
