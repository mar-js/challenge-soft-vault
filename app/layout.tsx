import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/global.css";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
