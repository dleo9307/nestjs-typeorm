import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../common/entity/base.entity';
import { Address } from './address';
import { Book } from '../../book/book';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class BookStore extends BaseEntity{
  @Column()
  @Field()
  name: string;

  @Column(() => Address)
  @Field(() => Address)
  address:Address;

  @ManyToMany(() => Book, book => book.bookStores)
  books: Book[];
}

