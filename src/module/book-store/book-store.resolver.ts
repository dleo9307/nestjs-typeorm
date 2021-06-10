import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookStore } from './domain/book-store';
import { BookStoreService } from './book-store.service';
import { BookStoreArgs, CreateBookStoreInput } from './book-store.dto';

@Resolver(() => BookStore)
export class BookStoreResolver {
  constructor(private bookStoreService: BookStoreService) {
  }

  @Query(() => BookStore)
  async bookStore(@Args('args') args: BookStoreArgs) {
    return this.bookStoreService.findOne(args);
  }

  @Mutation(() => BookStore)
  async createBookStore(@Args('input') input: CreateBookStoreInput): Promise<BookStore> {
    return this.bookStoreService.create(input);
  }
}
