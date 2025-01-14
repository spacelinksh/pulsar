import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateTransferKeyDto {
  @Field(() => String, { description: "The key to be used for transfer" })
  key: string;

  @Field(() => Boolean, { description: "Whether the key is active" })
  active: boolean;
}
