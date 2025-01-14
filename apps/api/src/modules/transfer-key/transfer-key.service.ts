import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { CreateTransferKeyDto } from "./models/create-transfer-key.dto";

@Injectable()
export class TransferKeyService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(userId: string) {
    return this.prisma.transferKey.findMany({ where: { userId } });
  }

  findOne(id: string) {
    return this.prisma.transferKey.findUnique({ where: { id } });
  }

  create(userId: string, data: CreateTransferKeyDto) {
    return this.prisma.transferKey.create({
      data: { ...data, user: { connect: { id: userId } } },
    });
  }

  delete(id: string) {
    return this.prisma.transferKey.delete({ where: { id } });
  }
}
