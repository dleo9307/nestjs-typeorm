import { Field, ID, InputType } from '@nestjs/graphql';

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
export class UpdateBookStoreInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field(() => AddressInput, { nullable: true })
  address: AddressInput;
}

@InputType()
export class BookStoreArgs {
  @Field(() => ID, { nullable: true })
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field(() => AddressInput, { nullable: true })
  address?: AddressInput;
}
