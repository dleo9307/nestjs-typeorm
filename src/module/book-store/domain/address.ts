import { Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Address {
  @Column()
  @Field()
  firstAddress: string;

  @Column()
  @Field()
  lastAddress: string;
}
