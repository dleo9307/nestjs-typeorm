import { createConnection } from 'typeorm';
import { Book } from '../module/book/domain/book';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { BookStore } from '../module/book-store/domain/book-store';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'test',
      database: 'study',
      namingStrategy: new SnakeNamingStrategy(),
      entities: [
        Book,
        BookStore,
      ],
      synchronize: true,
    }),
  },
];
