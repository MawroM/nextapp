import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "1029345034806-h8tb3gvlh0okn79avmrnbjpifi7t4m8r.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  secret: "2e5ae5450ce6ac411a234ac581ad9239"
}
export default NextAuth(authOptions)