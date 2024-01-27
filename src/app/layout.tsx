import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/providers/providers";
import Header from "@/components/Header/Header";
import { RootLayoutPropsType } from "@/types/types";
import "@/styles/global.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
	title: "Readucate | Blog Website",
	description: "A Blog Website That Educates Minds",
};

export default function RootLayout({ children }: RootLayoutPropsType) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
