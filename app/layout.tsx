import type { Metadata } from "next";
import "@/app/styles/global.css";
import { senFont, syneFont } from "@/fonts";

export const metadata: Metadata = {
	title: "SoftVault",
	description: "Prueba técnica",
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
