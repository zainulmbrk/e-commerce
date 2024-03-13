import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: any = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
		}),
	],
	callbacks: {
		async jwt({ token, account }: any) {
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token, user }: any) {
			session.accessToken = token.accessToken;
			return session;
		},
	},
};

export default NextAuth(authOptions);