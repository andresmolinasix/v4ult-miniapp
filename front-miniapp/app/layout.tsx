import type { Metadata } from "next";
import "./globals.css";

import { headers } from "next/headers"; // added
import ContextProvider from "@/app/context";

import { Toaster } from "sonner";

export const metadata: Metadata = {
	title: "V4ULT Mini App",
	description: "Manage and balance your V4ULT assets with ease.",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const headersObj = await headers();
	const cookies = headersObj.get("cookie");

	return (
		<html lang='en' data-theme='dark'>
			<body className='antialiased'>
				<Toaster position='top-right' richColors />
				<ContextProvider cookies={cookies}>{children}</ContextProvider>
			</body>
		</html>
	);
}
