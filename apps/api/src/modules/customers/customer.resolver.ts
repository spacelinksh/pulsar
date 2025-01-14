import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Customer } from "./entities/customer.entity";
import { CustomerService } from "./customer.service";
import { CreateCustomerDto } from "./models/create-customer.dto";
import { User } from "../user/entities/user.entity";
import { UpdateCustomerDto } from "./models/update-customer.dto";
import { GetCurrentUser } from "src/common/decorators/get-current-user.decorator";
import { AuthGuard } from "src/common/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { CurrentUserType } from "src/utils/types/current-user.type";

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @UseGuards(AuthGuard)
  @Query(() => [Customer], { name: "getAllCustomers" })
  findAll(@GetCurrentUser() user: User) {
    return this.customerService.findAll(user.id);
  }

  @UseGuards(AuthGuard)
  @Query(() => Customer, { name: "getCustomerById" })
  findOne(@Args("id") id: string, @GetCurrentUser() user: User) {
    return this.customerService.findOne(user.id, id);
  }

  @Mutation(() => Customer, { name: "createCustomer" })
  @UseGuards(AuthGuard)
  create(
    @Args("data") data: CreateCustomerDto,
    @GetCurrentUser() user: CurrentUserType,
  ) {
    return this.customerService.create(user.userId, data);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Customer, { name: "updateCustomer" })
  update(@Args("data") data: UpdateCustomerDto, @GetCurrentUser() user: User) {
    return this.customerService.update(user.id, data);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Customer, { name: "deleteCustomer" })
  delete(@Args("id") id: string) {
    return this.customerService.delete(id);
  }
}
