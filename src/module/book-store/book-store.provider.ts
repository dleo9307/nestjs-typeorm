import { BookStoreRepository } from './book-store.repository';
import { Connection } from 'typeorm';

export const bookStoreProvider =
  {
    provide: 'BOOK_STORE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getCustomRepository(BookStoreRepository),
    inject: ['DATABASE_CONNECTION'],
  };
