import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { CreateTransactionDto } from "./models/create-transaction.dto";
import { UpdateTransactionDto } from "./models/update-transaction.dto";

@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(userId: string) {
    return this.prisma.transaction.findMany({ where: { userId } });
  }

  findOne(userId: string, id: string) {
    return this.prisma.transaction.findUnique({ where: { id, userId } });
  }

  create(userId: string, data: CreateTransactionDto) {
    const { amount, description, type } = data;

    return this.prisma.transaction.create({
      data: { amount, description, type, user: { connect: { id: userId } } },
    });
  }

  update(data: UpdateTransactionDto) {
    const { id, amount, description, type } = data;

    return this.prisma.transaction.update({
      where: { id },
      data: { amount, description, type },
    });
  }

  delete(id: string) {
    return this.prisma.transaction.delete({ where: { id } });
  }
}
