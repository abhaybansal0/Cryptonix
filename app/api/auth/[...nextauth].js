import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";

const handler =  NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect user to dashboard after successful login
      return baseUrl + '/dashboard';
    },
  },
  pages: {
    signIn: '/login',  // Custom login page
  },
  session: {
    strategy: 'jwt',  // Optional: Use JWT tokens for sessions
  },
  secret: process.env.NEXTAUTH_SECRET, // Add this to your .env file

})


export {handler as GET, handler as POST}