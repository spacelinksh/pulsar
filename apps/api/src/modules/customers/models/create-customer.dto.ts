import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateCustomerDto {
  @Field(() => String, { description: "The name of the customer" })
  name: string;

  @Field(() => String, { description: "The email of the customer" })
  email: string;

  @Field(() => String, {
    description: "The phone of the customer",
    nullable: true,
  })
  phone?: string;

  @Field(() => String, { description: "The document of the customer" })
  document: string;
}
