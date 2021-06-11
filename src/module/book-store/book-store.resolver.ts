import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookStore } from './domain/book-store';
import { BookStoreService } from './book-store.service';
import { BookStoreArgs, CreateBookStoreInput, UpdateBookStoreInput } from './book-store.dto';

@Resolver(() => BookStore)
export class BookStoreResolver {
  constructor(private bookStoreService: BookStoreService) {
  }

  @Query(() => BookStore)
  async bookStore(@Args('args') args: BookStoreArgs): Promise<BookStore> {
    return this.bookStoreService.findOne(args);
  }

  @Query(() => [BookStore])
  async bookStores(@Args('args', { nullable: true }) args: BookStoreArgs): Promise<BookStore[]> {
    return this.bookStoreService.findAll(args);
  }

  @Mutation(() => BookStore)
  async createBookStore(@Args('input') input: CreateBookStoreInput): Promise<BookStore> {
    return this.bookStoreService.create(input);
  }

  @Mutation(() => BookStore)
  async updateBookStore(@Args('input') input: UpdateBookStoreInput): Promise<BookStore> {
    return this.bookStoreService.update(input);
  }
}
