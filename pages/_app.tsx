import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono } from "@/config/fonts";
import {useRouter} from 'next/router';
import { AuthProvider } from "react-oidc-context";
import "@/styles/globals.css";
import {api} from "@/lib/trpc";
import { type OidcClientSettings } from 'oidc-client-ts'

const oidcConfig: OidcClientSettings = {
	client_secret: "PmsdRdXjZ0H6Jfef7eGtY39zeU9qjVeu",
	client_id: "hr",
	redirect_uri: "http://localhost:3000",
	authority: "http://localhost:8080/realms/neterp",
}

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
	return (
		<NextUIProvider navigate={router.push}>
			<AuthProvider
				{...oidcConfig}
			>
				<NextThemesProvider>
					<Component {...pageProps} />
				</NextThemesProvider>
			</AuthProvider>
		</NextUIProvider>
	);
}

export default api.withTRPC(App);

export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
};
