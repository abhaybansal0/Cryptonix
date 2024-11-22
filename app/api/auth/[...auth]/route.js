import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

const handler =  NextAuth({
  providers: [
    // OAuth authentication providers...
    // Google Provider
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
  ],

  pages: {
    signIn: '/login'
  }
})


export {handler as GET, handler as POST}