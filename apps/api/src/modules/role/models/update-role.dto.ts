import { Field, ID, InputType, PartialType } from "@nestjs/graphql";

import { CreateRoleDto } from "./create-role.dto";

@InputType()
export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @Field(() => ID, { description: "The id of the role" })
  id: string;
}
