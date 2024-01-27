"use client";

import Image from "next/image";
import { Box, Container, Flex, Switch } from "@chakra-ui/react";

const Header = () => {
	return (
		<Box as="header">
			<Container as={"nav"} variant={"wrapper-custom"}>
				<Flex
					sx={{
						width: "full",
						padding: ["30px 0", "30px 40px", "30px 80px"],
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Image
						src={"/logo.svg"}
						width={131}
						height={24}
						alt="Logo"
					/>
					<Switch size={"lg"} colorScheme="purple" />
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
