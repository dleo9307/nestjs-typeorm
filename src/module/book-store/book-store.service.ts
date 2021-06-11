import { Inject, Injectable } from '@nestjs/common';
import { BookStoreRepository } from './book-store.repository';
import { BookStoreArgs, CreateBookStoreInput, UpdateBookStoreInput } from './book-store.dto';
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
    return this.bookStoreRepository.findOne({ ...args });
  }

  async findAll(args: BookStoreArgs): Promise<BookStore[]> {
    return this.bookStoreRepository.find({ ...args });
  }

  async update(input: UpdateBookStoreInput): Promise<BookStore> {
    const {id} = input;
    const bookStore: BookStore = await this.bookStoreRepository.findOne(id);
    return bookStore.save({data:input});
  }
}
