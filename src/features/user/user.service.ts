import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private dataSource: DataSource,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findById(userId: number): Promise<UserEntity> {
    return this.userRepository.findOneBy({ id: userId });
  }

  async create(userData: CreateUserDto): Promise<UserEntity> {
    const { documentNumber } = userData;
    const existingUser = await this.userRepository.findOneBy({
      documentNumber,
    });

    if (existingUser) {
      throw new BadRequestException(
        `User with document number ${existingUser.documentNumber} already exists`,
      );
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const userEntity: UserEntity = this.userRepository.create(userData);
      const createdUser = await queryRunner.manager.save(userEntity);

      await queryRunner.commitTransaction();
      return createdUser;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async update(userId: number, userData: UpdateUserDto): Promise<UserEntity> {
    await this.userRepository.update(userId, userData);
    return this.findById(userId);
  }

  async delete(userId: number): Promise<void> {
    await this.userRepository.delete(userId);
  }
}
