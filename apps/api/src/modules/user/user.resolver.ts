import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { Query } from "@nestjs/graphql";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";
import { CreateUserDto } from "./models/create-user-dto.model";
import { GetCurrentUser } from "src/common/decorators/get-current-user.decorator";
import { CurrentUserType } from "src/utils/types/current-user.type";
import { AuthGuard } from "src/common/guards/auth.guard";
import { UseGuards } from "@nestjs/common";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: "getAllUsers" })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: "getUserById" })
  findOne(@Args("id", { type: () => String }) id: string) {
    return this.userService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Query(() => User, { name: "getMe" })
  me(@GetCurrentUser() currentUser: CurrentUserType) {
    return this.userService.me(currentUser.userId);
  }

  @Mutation(() => User, { name: "createUser" })
  async create(@Args("data") data: CreateUserDto) {
    return this.userService.create(data);
  }

  @Mutation(() => User, { name: "deleteUser" })
  async delete(@Args("id", { type: () => String }) id: string) {
    return this.userService.delete(id);
  }
}
