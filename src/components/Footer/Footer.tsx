import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
			<Container variant="wrapper-custom">
				<Flex
					sx={{
						width: "full",
						flexDir: "column",
						padding: ["30px 0", "30px 40px", "30px 80px"],
						gap: "32px",
					}}
				>
					<Text sx={{ textAlign: "center" }}>
						&copy; Copyrights 2023
					</Text>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
