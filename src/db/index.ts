import { DataSource } from 'typeorm';
import { createUsers, createDocumentTypes, createGenders } from './seeds';

export async function runSeeds(datasource: DataSource) {
  await createGenders(datasource);
  await createDocumentTypes(datasource);
  await createUsers(datasource);
  return;
}
