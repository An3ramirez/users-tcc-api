import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  documentType: number;

  @Column({ type: 'bigint' })
  documentNumber: number;

  @Column()
  gender: number;
}
