import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { Role } from "./entities/role.entity";
import { RoleService } from "./role.service";

import { CreateRoleDto } from "./models/create-role.dto";
import { UpdateRoleDto } from "./models/update-role.dto";

@Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => [Role], { name: "getAllRoles" })
  findAll() {
    return this.roleService.findAll();
  }

  @Query(() => Role, { name: "getRoleById" })
  findOne(@Args("id", { type: () => String }) id: string) {
    return this.roleService.findOne(id);
  }

  @Mutation(() => Role, { name: "createRole" })
  create(@Args("data") data: CreateRoleDto) {
    return this.roleService.create(data);
  }

  @Mutation(() => Role, { name: "updateRole" })
  update(@Args("data") data: UpdateRoleDto) {
    return this.roleService.update(data.id, data);
  }

  @Mutation(() => Role, { name: "deleteRole" })
  delete(@Args("id", { type: () => String }) id: string) {
    return this.roleService.delete(id);
  }
}
