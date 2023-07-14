import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { DocumentTypeEntity } from './document-type.entity';
import { GenderEntity } from './gender.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  document_type_id: number;

  @Column({ type: 'bigint' })
  document_number: number;

  @Column()
  gender_id: number;

  @ManyToOne(() => DocumentTypeEntity, { nullable: false })
  @JoinColumn({ name: 'document_type_id', referencedColumnName: 'id' })
  documentType: DocumentTypeEntity;

  @ManyToOne(() => GenderEntity, { nullable: false })
  @JoinColumn({ name: 'gender_id', referencedColumnName: 'id' })
  gender: GenderEntity;
}
