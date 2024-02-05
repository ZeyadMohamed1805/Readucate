import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/providers/providers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { RootLayoutPropsType } from "@/types/types";

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
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
