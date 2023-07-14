import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { DocumentTypeEntity, GenderEntity, UserEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, DocumentTypeEntity, GenderEntity]),
  ],
  providers: [UserService],
  exports: [UserService, TypeOrmModule],
  controllers: [UserController],
})
export class UserModule {}
