import { DataSource } from 'typeorm';
import { GenderEntity } from '@features/user/entities';

export async function createGenders(dataSource: DataSource) {
  const genderRepository = dataSource.getRepository(GenderEntity);

  const genders = [
    { name: 'Mujer' },
    { name: 'Hombre' },
    { name: 'No definido' },
  ];

  const savedGenders: GenderEntity[] = [];

  for (const gender of genders) {
    const existingGender = await genderRepository.findOne({
      where: { name: gender.name },
    });

    if (!existingGender) {
      const savedGender = await genderRepository.save(gender);
      savedGenders.push(savedGender);
    }
  }

  return savedGenders;
}
