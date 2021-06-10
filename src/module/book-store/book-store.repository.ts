import { EntityRepository, Repository } from 'typeorm';
import { BookStore } from './domain/book-store';
import { CreateBookStoreInput } from './book-store.dto';

@EntityRepository(BookStore)
export class BookStoreRepository extends Repository<BookStore> {

  async createOne(dto: CreateBookStoreInput): Promise<BookStore>{
    return this.manager.save(this.create(dto));
  }

  async createMany(dtos: CreateBookStoreInput[]): Promise<BookStore[]>{
    const bookStores: BookStore[] = dtos.map((dto:CreateBookStoreInput) => this.create(dto));
    return this.manager.save(bookStores);
  }
}
