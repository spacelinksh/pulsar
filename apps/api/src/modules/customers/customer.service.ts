import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { CreateCustomerDto } from "./models/create-customer.dto";
import { UpdateCustomerDto } from "./models/update-customer.dto";

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(userId: string) {
    return this.prisma.customer.findMany({ where: { userId } });
  }

  findOne(userId: string, id: string) {
    return this.prisma.customer.findUnique({ where: { id, userId } });
  }

  async create(userId: string, data: CreateCustomerDto) {
    const { name, email, phone, document } = data;

    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const customerTransaction = await this.prisma.$transaction(async (tx) => {
      const customer = await tx.customer.create({
        data: {
          name,
          email,
          phone,
          document,
          status: "ACTIVE",
          user: {
            connect: {
              id: (await user).id,
            },
          },
        },
      });

      return customer;
    });

    return customerTransaction;
  }

  update(id: string, data: UpdateCustomerDto) {
    return this.prisma.customer.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.customer.delete({ where: { id } });
  }
}
