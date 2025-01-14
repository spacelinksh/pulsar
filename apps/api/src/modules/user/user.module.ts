import { PrismaModule } from "src/shared/prisma/prisma.module";
import { UserService } from "./user.service";
import { UserResolver } from "./user.resolver";
import { Module } from "@nestjs/common";

@Module({
  imports: [PrismaModule],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
