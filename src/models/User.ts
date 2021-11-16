import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm'

@Entity('client')
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
}