import { Field, ObjectType } from "@nestjs/graphql";
import { UserStatus } from "@prisma/client";
import { BaseEntity } from "src/common/entities/base.entity";
import { Role } from "src/modules/role/entities/role.entity";
import { Customer } from "src/modules/customers/entities/customer.entity";
@ObjectType()
export class User extends BaseEntity {
  @Field(() => String, { description: "The name of the user" })
  name: string;

  @Field(() => String, { description: "The email address of the user" })
  email: string;

  @Field(() => String, {
    description: "The phone number of the user",
    nullable: true,
  })
  phone: string;

  @Field(() => String, { description: "The document of the user" })
  document: string;

  @Field(() => String, {
    description: "The token of the user",
    nullable: true,
  })
  token: string;

  @Field(() => String, {
    description: "The avatar of the user",
    nullable: true,
  })
  avatar: string;

  @Field(() => UserStatus, { description: "The status of the user" })
  status: UserStatus;

  @Field(() => Role, { description: "The role of the user" })
  role: Role;

  @Field(() => [Customer], {
    description: "The customers of the user",
    nullable: true,
  })
  customers?: Customer[];
}
