import { DataSource } from 'typeorm';
import { createUsers } from './seeds';

export async function runSeeds(datasource: DataSource) {
  await createUsers(datasource);
  return;
}
