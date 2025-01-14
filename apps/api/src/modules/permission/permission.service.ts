import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/shared/prisma/prisma.service";

import { CreatePermissionDto } from "./models/create-permission.dto";
import { UpdatePermissionDto } from "./models/update-permission.dto";

@Injectable()
export class PermissionService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.permission.findMany();
  }

  findOne(id: string) {
    return this.prisma.permission.findUnique({ where: { id } });
  }

  create(data: CreatePermissionDto) {
    return this.prisma.permission.create({ data });
  }

  update(id: string, data: UpdatePermissionDto) {
    return this.prisma.permission.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.permission.delete({ where: { id } });
  }
}
