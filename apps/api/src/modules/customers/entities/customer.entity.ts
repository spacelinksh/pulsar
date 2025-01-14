import { Field, registerEnumType } from "@nestjs/graphql";

import { ObjectType } from "@nestjs/graphql";
import { CustomerStatus } from "@prisma/client";
import { BaseEntity } from "src/common/entities/base.entity";
import { User } from "src/modules/user/entities/user.entity";
registerEnumType(CustomerStatus, {
  name: "CustomerStatus",
  description: "The status of the customer",
});

@ObjectType()
export class Customer extends BaseEntity {
  @Field(() => String, { description: "The name of the customer" })
  name: string;

  @Field(() => String, { description: "The email of the customer" })
  email: string;

  @Field(() => String, {
    description: "The phone of the customer",
    nullable: true,
  })
  phone: string | null;

  @Field(() => String, { description: "The document of the customer" })
  document: string;

  @Field(() => CustomerStatus, {
    description: "The status of the customer",
  })
  status: CustomerStatus;

  @Field(() => User, { description: "The user of the customer" })
  user: User;
}
