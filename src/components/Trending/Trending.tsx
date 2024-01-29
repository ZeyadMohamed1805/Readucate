import { Box, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import BlogCard from "../Common/BlogCard/BlogCard";

const All = () => {
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
						Trending blog posts
					</Heading>
					<SimpleGrid
						columns={3}
						minChildWidth={[250, 300]}
						gap={"32px"}
					>
						<BlogCard
							card={{
								image: "/all-1.svg",
								direction: ["column"],
								date: "Sunday , 1 Jan 2023",
								title: "Bill Walsh leadership lessons",
								author: "J. K. Rowling",
								description:
									"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
								badges: {
									display: ["flex"],
									content: [
										{
											bg: "#F9F5FF",
											color: "#7F56D9",
											genre: "Leadership",
										},
										{
											bg: "#EEF4FF",
											color: "#3538CD",
											genre: "Management",
										},
									],
								},
							}}
						/>
						<BlogCard
							card={{
								image: "/all-2.svg",
								direction: ["column"],
								date: "Sunday , 1 Jan 2023",
								title: "PM mental models",
								author: "J. K. Rowling",
								description:
									"Mental models are simple expressions of complex processes or relationships.",
								badges: {
									display: ["flex"],
									content: [
										{
											bg: "#F9F5FF",
											color: "#7F56D9",
											genre: "Product",
										},
										{
											bg: "#EEF4FF",
											color: "#3538CD",
											genre: "Research",
										},
										{
											bg: "#FDF2FA",
											color: "#C11574",
											genre: "Frameworks",
										},
									],
								},
							}}
						/>
						<BlogCard
							card={{
								image: "/all-3.svg",
								direction: ["column"],
								date: "Sunday , 1 Jan 2023",
								title: "What is Wireframing?",
								author: "J. K. Rowling",
								description:
									"Introduction to Wireframing and its Principles. Learn from the best in the industry.",
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
									],
								},
							}}
						/>
						<BlogCard
							card={{
								image: "/all-4.svg",
								direction: ["column"],
								date: "Sunday , 1 Jan 2023",
								title: "How collaboration makes us better designers",
								author: "J. K. Rowling",
								description:
									"Collaboration can make our teams stronger, and our individual designs better.",
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
									],
								},
							}}
						/>
						<BlogCard
							card={{
								image: "/all-5.svg",
								direction: ["column"],
								date: "Sunday , 1 Jan 2023",
								title: "Our top 10 Javascript frameworks to use",
								author: "J. K. Rowling",
								description:
									"JavaScript frameworks make development easy with extensive features and functionalities.",
								badges: {
									display: ["flex"],
									content: [
										{
											bg: "#F9F5FF",
											color: "#7F56D9",
											genre: "Software Development",
										},
										{
											bg: "#FDF2FA",
											color: "#C11574",
											genre: "Tools",
										},
										{
											bg: "#EEF4FF",
											color: "#3538CD",
											genre: "SaaS",
										},
									],
								},
							}}
						/>
						<BlogCard
							card={{
								image: "/all-6.svg",
								direction: ["column"],
								date: "Sunday , 1 Jan 2023",
								title: "Podcast: Creating a better CX Community",
								author: "J. K. Rowling",
								description:
									"Starting a community doesn’t need to be complicated, but how do you get started?",
								badges: {
									display: ["flex"],
									content: [
										{
											bg: "#F9F5FF",
											color: "#7F56D9",
											genre: "Podcasts",
										},
										{
											bg: "#EEF4FF",
											color: "#3538CD",
											genre: "Customer Success",
										},
									],
								},
							}}
						/>
					</SimpleGrid>
				</Flex>
			</Container>
		</Box>
	);
};

export default All;
