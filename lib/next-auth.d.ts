import NextAuth  from "next-auth/next";

declare module "next-auth" {
  interface Session {
      token: string;
        user: {
            id: number;
            userName: string;
            email: string;
            isVerify: boolean;
        };
    };
  }

import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
  interface JWT {
    token: string;
        user: {
            id: number;
            userName: string;
            email: string;
            isVerify: boolean;
        };
  }
}