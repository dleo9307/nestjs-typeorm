import { createConnection } from 'typeorm';
import { Book } from '../../module/book/book';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { BookStore } from '../../module/book-store/domain/book-store';

export const databaseProvider =
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'test',
      database: 'study',
      namingStrategy: new SnakeNamingStrategy(),
      logging:true,
      entities: [
        Book,
        BookStore,
      ],
      synchronize: true,
    }),
  };

