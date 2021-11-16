import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm'

@Entity('accounts')
export class Account extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  lastname: string;


}