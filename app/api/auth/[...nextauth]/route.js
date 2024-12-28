import User from "@/lib/models/user";
import { ConnectDB } from "@/lib/config/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          // Mengembalikan user beserta role
          return {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,  // Pastikan role juga dimasukkan
          };
        } catch (error) {
          console.log("Error: ", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Gunakan JWT untuk session
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Menambahkan role ke JWT token
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Menambahkan role ke session
      if (token.role) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
