import { UserEntity } from '@features/user/entities/user.entity';
import { DataSource } from 'typeorm';

export async function createUsers(datasource: DataSource) {
  const userRepository = datasource.getRepository(UserEntity);

  const users = [
    {
      firstName: 'John',
      lastName: 'Doe',
      documentType: 1,
      documentNumber: 123456789,
      gender: 1,
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      documentType: 2,
      documentNumber: 987654321,
      gender: 2,
    },
  ];
  const savedUsers: UserEntity[] = [];

  for (const user of users) {
    const existingUser = await userRepository.findOne({
      where: { documentNumber: user.documentNumber },
    });

    if (!existingUser) {
      const savedUser = await userRepository.save(user);
      savedUsers.push(savedUser);
    }
  }

  return savedUsers;
}
