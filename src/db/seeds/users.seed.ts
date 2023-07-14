import { UserEntity } from '@features/user/entities/user.entity';
import { DataSource } from 'typeorm';

export async function createUsers(datasource: DataSource) {
  const userRepository = datasource.getRepository(UserEntity);

  const users = [
    {
      first_name: 'John',
      last_name: 'Doe',
      document_type_id: 1,
      document_number: 123456789,
      gender_id: 1,
    },
    {
      first_name: 'Jane',
      last_name: 'Smith',
      document_type_id: 1,
      document_number: 987654321,
      gender_id: 1,
    },
  ];
  const savedUsers: UserEntity[] = [];

  for (const user of users) {
    const existingUser = await userRepository.findOne({
      where: { document_number: user.document_number },
    });

    if (!existingUser) {
      const savedUser = await userRepository.save(user);
      savedUsers.push(savedUser);
    }
  }

  return savedUsers;
}
