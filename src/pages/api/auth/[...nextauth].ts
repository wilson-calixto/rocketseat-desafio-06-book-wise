import NextAuth,{ NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'



export const authOptions: NextAuthOptions={
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret:process.env.GOOGLE_CLIENT_SECRET ?? "",
            authorization:{
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                    scope:
                      'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar',
                  },
            }
        })
    ]
}

export default NextAuth(authOptions)