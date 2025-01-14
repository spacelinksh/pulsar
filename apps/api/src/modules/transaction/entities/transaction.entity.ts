import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "src/common/entities/base.entity";

import { TransactionType } from "@prisma/client";
import { User } from "src/modules/user/entities/user.entity";

@ObjectType()
export class Transaction extends BaseEntity {
  @Field(() => TransactionType, { description: "Transaction type" })
  type: TransactionType;

  @Field(() => Number, { description: "Transaction amount" })
  amount: number;

  @Field(() => String, { description: "Transaction description" })
  description: string;

  @Field(() => User, { description: "Transaction user" })
  user: User;
}
