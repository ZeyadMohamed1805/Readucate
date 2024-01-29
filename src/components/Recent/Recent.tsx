import {
	Box,
	Container,
	Heading,
	Flex,
	Grid,
	GridItem,
} from "@chakra-ui/react";
import BlogCard from "../Common/BlogCard/BlogCard";

const Recent = () => {
	return (
		<Box as="section">
			<Container variant={"wrapper-custom"}>
				<Flex
					sx={{
						width: "full",
						flexDir: "column",
						padding: [
							"60px 0 30px 0",
							"60px 40px 30px 40px",
							"60px 80px 30px 80px",
						],
						gap: "32px",
					}}
				>
					<Heading as={"h2"} variant={"h2-custom"}>
						Recent blog posts
					</Heading>
					<Grid
						templateColumns={[
							"1fr",
							"1fr",
							"1fr",
							"1fr",
							"repeat(2, 1fr)",
						]}
						templateRows={[
							"1fr",
							"1fr",
							"1fr",
							"1fr",
							"repeat(2, 1fr)",
						]}
						gap={"32px"}
					>
						<GridItem
							gridRow={[1, 1, 1, 1, "1 / 3"]}
							gridColumn={[1, 1, 1, 1, "1 / 2"]}
						>
							<BlogCard
								card={{
									image: "/recent-1.svg",
									direction: ["column"],
									date: "Sunday , 1 Jan 2023",
									title: "UX review presentations",
									author: "J. K. Rowling",
									description:
										"How do you create compelling presentations that wow your colleagues and impress your managers?",
									badges: {
										display: ["flex"],
										content: [
											{
												bg: "#F9F5FF",
												color: "#7F56D9",
												genre: "Design",
											},
											{
												bg: "#EEF4FF",
												color: "#3538CD",
												genre: "Research",
											},
											{
												bg: "#FDF2FA",
												color: "#C11574",
												genre: "Presentation",
											},
										],
									},
								}}
							/>
						</GridItem>
						<GridItem gridColumn={[1, 1, 1, 1, "2 / 3"]}>
							<BlogCard
								card={{
									image: "/recent-2.svg",
									direction: ["column", "column", "row"],
									date: "Sunday , 1 Jan 2023",
									title: "Migrating to Linear 101",
									author: "J. K. Rowling",
									description:
										"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
									badges: {
										display: [
											"flex",
											"flex",
											"none",
											"none",
											"flex",
										],
										content: [
											{
												bg: "#F9F5FF",
												color: "#7F56D9",
												genre: "Design",
											},
											{
												bg: "#FDF2FA",
												color: "#C11574",
												genre: "Research",
											},
										],
									},
								}}
							/>
						</GridItem>
						<GridItem gridColumn={[1, 1, 1, 1, "2 / 3"]}>
							<BlogCard
								card={{
									image: "/recent-3.svg",
									direction: ["column", "column", "row"],
									date: "Sunday , 1 Jan 2023",
									title: "Building your API Stack",
									author: "J. K. Rowling",
									description:
										"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
									badges: {
										display: [
											"flex",
											"flex",
											"none",
											"none",
											"flex",
										],
										content: [
											{
												bg: "#F9F5FF",
												color: "#7F56D9",
												genre: "Design",
											},
											{
												bg: "#FDF2FA",
												color: "#C11574",
												genre: "Research",
											},
										],
									},
								}}
							/>
						</GridItem>
						<GridItem gridColumn={[1, 1, 1, 1, "1 / 3"]}>
							<BlogCard
								card={{
									image: "/recent-4.svg",
									direction: [
										"column",
										"column",
										"column",
										"column",
										"row",
									],
									date: "Sunday , 1 Jan 2023",
									title: "Grid system for better Design User Interface",
									author: "J. K. Rowling",
									description:
										"A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
									badges: {
										display: [
											"flex",
											"flex",
											"none",
											"none",
											"flex",
										],
										content: [
											{
												bg: "#F9F5FF",
												color: "#7F56D9",
												genre: "Design",
											},
											{
												bg: "#FDF2FA",
												color: "#C11574",
												genre: "Interface",
											},
										],
									},
								}}
							/>
						</GridItem>
					</Grid>
				</Flex>
			</Container>
		</Box>
	);
};

export default Recent;
