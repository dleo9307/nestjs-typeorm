import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/entity/base.entity';
import { BookType } from './book.enum';

@Entity()
export class Book extends BaseEntity{
  @Column()
  name: string;

  @Column({type:'enum', enum: BookType})
  type: BookType;

  @Column()
  quantity: number;

  @Column()
  author: string;

  @Column()
  publisher: string;
}

