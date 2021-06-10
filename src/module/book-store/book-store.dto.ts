import { Address } from './domain/address';
import { Field, ID, InputType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class AddressInput {
  @Field()
  firstAddress: string;

  @Field()
  lastAddress: string;
}

@InputType()
export class CreateBookStoreInput {
  @Field()
  name: string;

  @Field(() => AddressInput)
  address: AddressInput;
}

@InputType()
export class BookStoreArgs {
  @Field(() => ID, { nullable: true })
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field(() => AddressInput, { nullable: true })
  address: AddressInput;
}
