import { Field, ObjectType } from "@nestjs/graphql";

import { BaseEntity } from "src/common/entities/base.entity";
import { Permission } from "src/modules/permission/entites/permission.entity";

@ObjectType()
export class Role extends BaseEntity {
  @Field(() => String, { description: "The name of the role" })
  name: string;

  @Field(() => String, {
    description: "The description of the role",
    nullable: true,
  })
  description?: string;

  @Field(() => [Permission], { description: "The permissions of the role" })
  permissions: Permission[];
}
