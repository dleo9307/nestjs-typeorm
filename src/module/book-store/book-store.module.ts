import { Module } from '@nestjs/common';
import { bookStoreProvider } from './book-store.provider';
import { BookStoreService } from './book-store.service';
import { BookStoreResolver } from './book-store.resolver';

@Module({
  providers: [
    bookStoreProvider,
    BookStoreService,
    BookStoreResolver,
  ],
})
export class BookStoreModule {}
