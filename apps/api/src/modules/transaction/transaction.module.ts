import { Module } from "@nestjs/common";

import { PrismaModule } from "src/shared/prisma/prisma.module";

import { TransactionResolver } from "./transaction.resolver";
import { TransactionService } from "./transaction.service";

@Module({
  imports: [PrismaModule],
  providers: [TransactionResolver, TransactionService],
})
export class TransactionModule {}
