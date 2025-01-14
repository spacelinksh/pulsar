import { Field } from "@nestjs/graphql";

import { ObjectType } from "@nestjs/graphql";

@ObjectType()
export class BaseEntity {
  @Field(() => String, { description: "The unique identifier of the entity" })
  id: string;

  @Field(() => Date, {
    description: "The date and time the entity was created",
  })
  createdAt: Date;

  @Field(() => Date, {
    description: "The date and time the entity was last updated",
  })
  updatedAt: Date;
}
