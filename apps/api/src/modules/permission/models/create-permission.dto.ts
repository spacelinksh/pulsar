import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreatePermissionDto {
  @Field(() => String, { description: "The name of the permission" })
  name: string;

  @Field(() => String, {
    description: "The description of the permission",
    nullable: true,
  })
  description: string;
}
