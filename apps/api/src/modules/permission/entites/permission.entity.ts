import { ObjectType } from "@nestjs/graphql";

import { Field } from "@nestjs/graphql";
import { BaseEntity } from "src/common/entities/base.entity";

@ObjectType()
export class Permission extends BaseEntity {
  @Field(() => String, { description: "The name of the permission" })
  name: string;

  @Field(() => String, {
    description: "The description of the permission",
    nullable: true,
  })
  description: string;
}
