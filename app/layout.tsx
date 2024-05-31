import type { Metadata } from "next";
import "@/app/styles/global.css";
import { senFont, syneFont } from "@/fonts";
import favicon from "@/public/favicon.ico";

export const metadata: Metadata = {
	title: "SoftVault",
	description: "Prueba técnica.",
	keywords: ["SoftVault"],
	authors: [
		{
			name: "SoftVault",
			url: "https://softvault.dev/",
		},
	],
	icons: [
		{
			rel: "icon",
			type: "image/x-icon",
			url: favicon.src,
			sizes: "16x16",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`${syneFont.variable} ${senFont.variable}`}>
				{children}
			</body>
		</html>
	);
}
