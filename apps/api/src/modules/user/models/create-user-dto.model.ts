import { InputType, Field, ID, registerEnumType } from "@nestjs/graphql";

import { UserStatus } from "@prisma/client";

registerEnumType(UserStatus, {
  name: "UserStatus",
  description: "The status of the user",
});

@InputType()
export class CreateUserDto {
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

  @Field(() => UserStatus, { description: "The status of the user" })
  status: UserStatus;

  @Field(() => String, { description: "The password of the user" })
  password: string;

  @Field(() => ID, { description: "The role id of the user" })
  roleId: string;
}
