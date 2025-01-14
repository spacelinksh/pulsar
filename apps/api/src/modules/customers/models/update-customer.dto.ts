import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateCustomerDto } from "./create-customer.dto";

@InputType()
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  @Field(() => String, { description: "The id of the customer" })
  id: string;
}
