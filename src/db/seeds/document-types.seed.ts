import { DataSource } from 'typeorm';
import { DocumentTypeEntity } from '@features/user/entities/document-type.entity';

export async function createDocumentTypes(dataSource: DataSource) {
  const documentTypeRepository = dataSource.getRepository(DocumentTypeEntity);

  const documentTypes = [
    { name: 'Cédula Cuidadania' },
    { name: 'nit' },
    { name: 'Cédula Extranjeria' },
  ];

  const savedDocumentTypes: DocumentTypeEntity[] = [];

  for (const documentType of documentTypes) {
    const existingDocumentType = await documentTypeRepository.findOne({
      where: { name: documentType.name },
    });

    if (!existingDocumentType) {
      const savedDocumentType = await documentTypeRepository.save(documentType);
      savedDocumentTypes.push(savedDocumentType);
    }
  }

  return savedDocumentTypes;
}
