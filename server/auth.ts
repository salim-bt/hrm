import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import {
    getServerSession,
    type DefaultSession,
    type NextAuthOptions,
} from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

import { env } from "@/env";
import { db } from "@/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
    interface Session extends DefaultSession {
        user: DefaultSession["user"] & {
            id: string;
            // ...other properties
            // roles: string[];
        };
    }

    // interface User {
    //   // ...other properties
    //   // role: UserRole;
    // }
}

const adapter = PrismaAdapter(db);
const _linkAccount = adapter.linkAccount;
adapter.linkAccount = (account:any) => {
    const { 'not-before-policy': _, refresh_expires_in, ...data } = account;
    return _linkAccount ? _linkAccount(data) : Promise.resolve();
};

//remove not before policy


/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
    theme: {
        brandColor: "#000000",
        colorScheme: "auto",
        buttonText: "Sign in with Keycloak",
        logo: "https://newedge.bt/storage/logo/logonewedge_1599029039.png",
    },
    callbacks: {
        session: ({ session, user }) => {
            return {
                ...session,
                user:{
                    ...session.user,
                    id: user.id,
                }
            }
        },
    },
    adapter,
    providers: [
        KeycloakProvider({
            clientId: env.NEXTAUTH_KEYCLOAK_CLIENT_ID,
            clientSecret: env.NEXTAUTH_KEYCLOAK_CLIENT_SECRET,
            issuer: env.NEXTAUTH_KEYCLOAK_ISSUER
        }),
        /**
         * ...add more providers here.
         *
         * Most other providers require a bit more work than the Discord provider. For example, the
         * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
         * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
         *
         * @see https://next-auth.js.org/providers/github
         */
    ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
    req: GetServerSidePropsContext["req"];
    res: GetServerSidePropsContext["res"];
}) => {
    return getServerSession(ctx.req, ctx.res, authOptions);
};