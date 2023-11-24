import axios from "axios";
import type { AuthOptions, User } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import Credentials from 'next-auth/providers/credentials';
 

export const authConfig: AuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER_BASE_URL,
      // token: {
      //   url: process.env.AUTH0_ISSUER_BASE_URL,
      //   async request(context) {
      //     // context contains useful properties to help you make the request.
      //     const tokens = await makeTokenRequest(context)
      //     return { tokens }
      //   }
      // }
      }),
    Credentials({
        credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials, req) {
        const res = await fetch('http://localhost:3001/auth/signIn', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()
        if (res.ok && user) {
          return user
        }

        return null
      }
          
    })
    ],
    pages: {
          signIn:'/signIn'
  },
    callbacks: {
      async jwt({ token, user, account, profile }) {

        console.log('token===>>>',token);
        console.log('user===>>>',user);
        console.log('account===>>>',account);
        console.log('refresh_token===>>>',account?.refresh_token);
        // { access_token:account?.access_token, id_token:account?.id_token}
        if (user) {
          return token={...user }
        }
        if (token) {
          if (token.user) {
             return token;
          } else {
            token.user = { userName: token.name, email: token.email, id: token.id };
            token.token = account?.id_token ? account?.id_token : ''
            return token;
          }
        }
    },
    
      async session({ token, session, user }) {
          session.user = token.user
          session.token = token.token
        return session
      }
  },

  session: {
    strategy: 'jwt',
  },
}

