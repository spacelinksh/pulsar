import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

import { TransferKey } from "./entities/transfer-key.entity";
import { TransferKeyService } from "./transfer-key.service";

import { AuthGuard } from "src/common/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { GetCurrentUser } from "src/common/decorators/get-current-user.decorator";
import { CreateTransferKeyDto } from "./models/create-transfer-key.dto";
import { CurrentUserType } from "src/utils/types/current-user.type";

@Resolver(() => TransferKey)
export class TransferKeyResolver {
  constructor(private readonly transferKeyService: TransferKeyService) {}

  @UseGuards(AuthGuard)
  @Query(() => [TransferKey], { name: "getAllTransferKeys" })
  async findAll(@GetCurrentUser() user: CurrentUserType) {
    return this.transferKeyService.findAll(user.userId);
  }

  @UseGuards(AuthGuard)
  @Query(() => TransferKey, { name: "getTransferKey" })
  findOne(@Args("id") id: string) {
    return this.transferKeyService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => TransferKey, { name: "createTransferKey" })
  create(
    @GetCurrentUser() user: CurrentUserType,
    @Args("data") data: CreateTransferKeyDto,
  ) {
    return this.transferKeyService.create(user.userId, data);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => TransferKey, { name: "deleteTransferKey" })
  delete(@Args("id") id: string) {
    return this.transferKeyService.delete(id);
  }
}
