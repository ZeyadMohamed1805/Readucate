import {
	Box,
	Container,
	Flex,
	Heading,
	VStack,
	Button,
} from "@chakra-ui/react";

const Hero = () => {
	return (
		<Box
			as="section"
			sx={{
				bg: `url("/hero.svg") no-repeat center`,
				bgSize: "cover",
				h: "100vh",
				display: "flex",
				alignItems: "center",
			}}
		>
			<Container
				variant={"wrapper-custom"}
				sx={{
					display: "flex",
					flexDir: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Flex
					sx={{
						width: "full",
						flexDir: "column",
						textAlign: "center",
						alignItems: "center",
						padding: ["30px 0", "30px 40px", "30px 80px"],
					}}
				>
					<Heading variant={"h1-custom"} color="white" opacity={0.5}>
						Read
					</Heading>
					<Heading variant={"h1-custom"} color="white" opacity={0.75}>
						Exceed
					</Heading>
					<Heading variant={"h1-custom"} color="white">
						Succeed
					</Heading>
					<VStack
						sx={{
							width: "full",
							maxW: "500px",
							mt: 5,
						}}
					>
						<Button
							variant={"secondary-cta"}
							sx={{ width: "full" }}
						>
							Publish
						</Button>
						<Button variant={"primary-cta"} sx={{ width: "full" }}>
							Explore
						</Button>
					</VStack>
				</Flex>
			</Container>
		</Box>
	);
};

export default Hero;
