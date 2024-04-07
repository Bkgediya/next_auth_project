import { NextRequest, NextResponse } from "next/server";    
import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
 
const handler = NextAuth({
  providers: [
    CredentialsProvider ({
        name: 'Credentials',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        async authorize(credentials: any) {
            const username = credentials.username
            const password = credentials.password
            
            return {
                id: "1",
                name:"jackson",
                email:"jackson@gmail.com"
            };
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || ""
      })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks :{
    session: ({ session, token, user }: any) => {
      if (session.user) {
          // session.user.id = token.sub
      }
      return session
  }
  }
})

export const GET = handler;
export const POST = handler;