import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/database/database.module';
import { BookStoreModule } from './module/book-store/book-store.module';
import { GraphQLFederationModule } from '@nestjs/graphql';

@Module({
  imports: [
    DatabaseModule,
    BookStoreModule,
    GraphQLFederationModule.forRoot({
      debug: true,
      autoSchemaFile: true,
      playground: true,
    }),
  ],
})
export class AppModule {
}
