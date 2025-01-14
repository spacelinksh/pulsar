import { InputType, Field, PartialType } from "@nestjs/graphql";
import { CreatePermissionDto } from "./create-permission.dto";

@InputType()
export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {
  @Field(() => String, { description: "The id of the permission" })
  id: string;
}
