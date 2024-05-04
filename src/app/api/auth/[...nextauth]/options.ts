import { requestLogin } from "@/services/axios";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type CredentialsType = {
  email: string;
  password: string;
};

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as CredentialsType;

        const data = await requestLogin(email, password)
          .then(({ data }) => {
            return data;
          })
          .catch((error) => {
            throw new Error(error.response?.data.message);
          });

        return data;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      const sessionCustomData = {
        token: { ...token },
        expires: session.expires,
      };

      return sessionCustomData;
    },
  },
};
