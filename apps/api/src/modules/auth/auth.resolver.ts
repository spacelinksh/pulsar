import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { AuthService } from "./auth.service";

import { Auth } from "./entities/auth.entity";
import { SignInDto } from "./models/sign-in.dto";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  async signIn(@Args("signInInput") signInInput: SignInDto) {
    return await this.authService.signIn(signInInput);
  }
}
