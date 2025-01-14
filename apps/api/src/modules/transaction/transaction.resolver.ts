import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { Transaction } from "./entities/transaction.entity";
import { TransactionService } from "./transaction.service";

import { CreateTransactionDto } from "./models/create-transaction.dto";
import { UpdateTransactionDto } from "./models/update-transaction.dto";

import { CurrentUserType } from "src/utils/types/current-user.type";
import { GetCurrentUser } from "src/common/decorators/get-current-user.decorator";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/common/guards/auth.guard";

@Resolver(() => Transaction)
export class TransactionResolver {
  constructor(private readonly transactionService: TransactionService) {}

  @UseGuards(AuthGuard)
  @Query(() => [Transaction], { name: "getAllTransactions" })
  findAll(@GetCurrentUser() user: CurrentUserType) {
    return this.transactionService.findAll(user.userId);
  }

  @UseGuards(AuthGuard)
  @Query(() => Transaction, { name: "getTransactionById" })
  findOne(
    @Args("id", { type: () => String }) id: string,
    @GetCurrentUser() user: CurrentUserType,
  ) {
    return this.transactionService.findOne(user.userId, id);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Transaction, { name: "createTransaction" })
  create(
    @Args("data") data: CreateTransactionDto,
    @GetCurrentUser() user: CurrentUserType,
  ) {
    return this.transactionService.create(user.userId, data);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Transaction, { name: "updateTransaction" })
  update(@Args("data") data: UpdateTransactionDto) {
    return this.transactionService.update(data);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Transaction, { name: "deleteTransaction" })
  delete(@Args("id", { type: () => String }) id: string) {
    return this.transactionService.delete(id);
  }
}
