import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRoleDto {
  @Field(() => String, { description: "The name of the role" })
  name: string;

  @Field(() => String, {
    description: "The description of the role",
    nullable: true,
  })
  description?: string;

  @Field(() => [ID], { description: "The permissions of the role" })
  permissions: string[];
}
