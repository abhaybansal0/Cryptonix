import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler =  NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),

      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // If it's the first sign-in, add user details to the token
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
        token.name = profile.name;
        token.email = profile.email;
        token.picture = profile.picture;
      }
      return token;
    },
    async session({ session, token }) {
      // Pass token data to session
      session.user = {
        name: token.name,
        email: token.email,
        image: token.picture,
      };
      return session;
    },

    async redirect({ url, baseUrl }) {
        // Redirect user to dashboard after successful login
        return baseUrl + '/dashboard';
      },
  },
  session: {
    strategy: "jwt", // Use JWT to persist session
  },
})


export {handler as GET, handler as POST}