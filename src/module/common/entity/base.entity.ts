import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity as BaseTypeormEntity } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseEntity extends BaseTypeormEntity{
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  updatedAt: Date;
}
