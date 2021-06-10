import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../common/entity/base.entity';
import { BookType } from '../book.enum';
import { BookStore } from '../../book-store/domain/book-store';

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

  @ManyToMany(() => BookStore, bookStore => bookStore.books)
  @JoinTable()
  bookStores: BookStore[];
}
