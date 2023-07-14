import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('document_type')
export class DocumentTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('tinyint', { default: true })
  isActive: boolean;
}
