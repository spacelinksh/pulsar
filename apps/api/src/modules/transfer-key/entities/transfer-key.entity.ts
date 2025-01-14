import { Field, ObjectType } from "@nestjs/graphql";

import { BaseEntity } from "src/common/entities/base.entity";
import { User } from "src/modules/user/entities/user.entity";

@ObjectType()
export class TransferKey extends BaseEntity {
  @Field(() => String, { description: "The key to be used for transfer" })
  key: string;

  @Field(() => Boolean, { description: "Whether the key is active" })
  active: boolean;

  @Field(() => User, { description: "The user associated with the key" })
  user: User;
}
