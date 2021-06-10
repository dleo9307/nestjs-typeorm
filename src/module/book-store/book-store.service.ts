import { Inject, Injectable } from '@nestjs/common';
import { BookStoreRepository } from './book-store.repository';
import { BookStoreArgs, CreateBookStoreInput } from './book-store.dto';
import { BookStore } from './domain/book-store';

@Injectable()
export class BookStoreService {

  constructor(
    @Inject('BOOK_STORE_REPOSITORY')
    private bookStoreRepository: BookStoreRepository,
  ) {
  }

  async create(input: CreateBookStoreInput): Promise<BookStore> {
    return this.bookStoreRepository.createOne(input);
  }

  async findOne(args: BookStoreArgs): Promise<BookStore> {
    console.log(args);
    return this.bookStoreRepository.findOne({ ...args });
  }
}
