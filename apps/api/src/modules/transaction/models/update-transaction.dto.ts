import { Field, ID, InputType, PartialType } from "@nestjs/graphql";

import { CreateTransactionDto } from "./create-transaction.dto";

@InputType()
export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
  @Field(() => ID, { description: "The id of the transaction" })
  id: string;
}
