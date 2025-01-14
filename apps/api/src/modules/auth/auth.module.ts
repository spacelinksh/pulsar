import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { PrismaModule } from "src/shared/prisma/prisma.module";
import { UserModule } from "../user/user.module";

import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";

import { jwtConstants } from "src/utils/types/jwt-constants.type";

@Module({
  imports: [
    UserModule,
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
    }),
  ],
  providers: [AuthResolver, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
