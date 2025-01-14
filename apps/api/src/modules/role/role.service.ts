import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma/prisma.service";

import { CreateRoleDto } from "./models/create-role.dto";
import { UpdateRoleDto } from "./models/update-role.dto";

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.role.findMany();
  }

  findOne(id: string) {
    return this.prisma.role.findUnique({ where: { id } });
  }

  create(data: CreateRoleDto) {
    return this.prisma.role.create({
      data: {
        name: data.name,
        description: data.description,
        permissions: { connect: data.permissions.map((id) => ({ id })) },
      },
    });
  }

  update(id: string, data: UpdateRoleDto) {
    return this.prisma.role.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        permissions: { set: data.permissions.map((id) => ({ id })) },
      },
    });
  }

  delete(id: string) {
    return this.prisma.role.delete({ where: { id } });
  }
}
