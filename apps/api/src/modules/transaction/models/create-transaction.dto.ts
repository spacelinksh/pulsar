import { Field, InputType, registerEnumType } from "@nestjs/graphql";

import { TransactionType } from "@prisma/client";

registerEnumType(TransactionType, {
  name: "TransactionType",
  description: "The type of the transaction",
});

@InputType()
export class CreateTransactionDto {
  @Field(() => String, { description: "The description of the transaction" })
  description: string;

  @Field(() => TransactionType, { description: "The type of the transaction" })
  type: TransactionType;

  @Field(() => Number, { description: "The amount of the transaction" })
  amount: number;
}
