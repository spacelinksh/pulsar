import { Module } from "@nestjs/common";

import { PrismaModule } from "src/shared/prisma/prisma.module";

import { CustomerService } from "./customer.service";
import { CustomerResolver } from "./customer.resolver";

@Module({
  imports: [PrismaModule],
  providers: [CustomerService, CustomerResolver],
})
export class CustomerModule {}
