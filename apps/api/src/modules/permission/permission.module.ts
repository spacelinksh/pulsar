import { Module } from "@nestjs/common";

import { PrismaModule } from "src/shared/prisma/prisma.module";

import { PermissionResolver } from "./permission.resolver";
import { PermissionService } from "./permission.service";

@Module({
  imports: [PrismaModule],
  providers: [PermissionResolver, PermissionService],
})
export class PermissionModule {}
