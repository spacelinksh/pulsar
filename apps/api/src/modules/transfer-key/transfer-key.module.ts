import { Module } from "@nestjs/common";

import { PrismaModule } from "src/shared/prisma/prisma.module";

import { TransferKeyResolver } from "./transfer-key.resolver";
import { TransferKeyService } from "./transfer-key.service";

@Module({
  imports: [PrismaModule],
  providers: [TransferKeyResolver, TransferKeyService],
})
export class TransferKeyModule {}
