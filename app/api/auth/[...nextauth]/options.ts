import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        // Hardcoded user for authentication
        const user = {
          id: "42",
          name: "admin",
          password: "necf2024",
          role: "admin",
        };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return {
            id: user.id,
            name: user.name,
            role: user.role,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Ensure ID is included
        token.name = user.name; // Include name in the token
        token.role = user.role; // Include role
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string;
        //@ts-ignore
        session.user.name = token.name as string; // Ensure name is added
        session.user.role = token.role as string; // Ensure role is added
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/register",
  },
};
