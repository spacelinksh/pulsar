import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { CreateUserDto } from "./models/create-user-dto.model";
import * as bcrypt from "bcrypt";
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        role: {
          include: {
            permissions: true,
          },
        },
      },
    });
  }

  async create(data: CreateUserDto) {
    const { name, email, phone, document, token, status, password, roleId } =
      data;

    const role = await this.prisma.role.findUnique({
      where: { id: data.roleId },
    });

    if (!role) {
      throw new Error("Role not found");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: {
        name,
        email,
        phone,
        document,
        token,
        status,
        password: hashedPassword,
        role: { connect: { id: roleId } },
      },
    });
  }

  async me(id: string) {
    const user = this.prisma.user.findUnique({
      where: { id },
      include: {
        role: {
          include: {
            permissions: true,
          },
        },
        transferKeys: true,
        customers: true,
        transactions: true,
      },
    });

    if (!user) throw new Error("User not found.");

    return user;
  }

  delete(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
