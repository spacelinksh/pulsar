import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigModule } from "@nestjs/config";
import { GqlConfigService } from "./config/graphql.config";
import { UserModule } from "./modules/user/user.module";
import { PermissionModule } from "./modules/permission/permission.module";
import { RoleModule } from "./modules/role/role.module";
import { AuthModule } from "./modules/auth/auth.module";
import { TransactionModule } from "./modules/transaction/transaction.module";
import { CustomerModule } from "./modules/customers/customer.module";
import { TransferKeyModule } from "./modules/transfer-key/transfer-key.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    AuthModule,
    UserModule,
    PermissionModule,
    RoleModule,
    TransactionModule,
    CustomerModule,
    TransferKeyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
