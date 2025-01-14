import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

import { Permission } from "./entites/permission.entity";
import { PermissionService } from "./permission.service";

import { CreatePermissionDto } from "./models/create-permission.dto";
import { UpdatePermissionDto } from "./models/update-permission.dto";

@Resolver(() => Permission)
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) {}

  @Query(() => [Permission], { name: "getAllPermissions" })
  findAll() {
    return this.permissionService.findAll();
  }

  @Query(() => Permission, { name: "getPermissionById" })
  findOne(@Args("id", { type: () => String }) id: string) {
    return this.permissionService.findOne(id);
  }

  @Mutation(() => Permission, { name: "createPermission" })
  create(@Args("data") data: CreatePermissionDto) {
    return this.permissionService.create(data);
  }

  @Mutation(() => Permission, { name: "updatePermission" })
  update(@Args("data") data: UpdatePermissionDto) {
    return this.permissionService.update(data.id, data);
  }

  @Mutation(() => Permission, { name: "deletePermission" })
  delete(@Args("id", { type: () => String }) id: string) {
    return this.permissionService.delete(id);
  }
}
