"use client";

import { useRef } from "react";
import Image from "next/image";
import {
	Box,
	Container,
	Flex,
	Switch,
	Drawer,
	Button,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerFooter,
	useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<any>();

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
					<Switch size={"lg"} />
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
