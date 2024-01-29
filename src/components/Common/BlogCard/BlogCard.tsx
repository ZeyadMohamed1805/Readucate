import Image from "next/image";
import Link from "next/link";
import {
	Card,
	CardBody,
	VStack,
	HStack,
	Heading,
	Text,
	Badge,
} from "@chakra-ui/react";
import { BlogCardPropsType } from "@/types/types";

const BlogCard = ({
	card: { image, direction, date, title, author, description, badges },
}: BlogCardPropsType) => {
	return (
		<Card sx={{ boxShadow: "0" }}>
			<CardBody
				sx={{ p: 0, display: "flex", flexDir: direction, gap: "24px" }}
			>
				<Image
					src={image}
					width={342}
					height={228}
					style={{
						width: "auto",
						height: "auto",
						objectFit: "cover",
					}}
					alt={title}
				/>
				<VStack sx={{ alignItems: "flex-start", gap: "12px" }}>
					<Text
						sx={{
							fontSize: "14px",
							color: "#7F56D9",
							fontWeight: 600,
						}}
					>
						{date}
					</Text>
					<Heading variant={"h3-custom"}>
						<Link href={"/"}>{title}</Link>
					</Heading>
					<Text
						sx={{
							fontSize: "14px",
							color: "#21D188",
							fontWeight: 600,
						}}
					>
						{author}
					</Text>
					<Text variant={"text-custom"}>{description}</Text>
					<HStack sx={{ display: badges.display }}>
						{badges.content &&
							badges.content.map((badge, index) => (
								<Badge
									key={index}
									variant={"badge-custom"}
									sx={{
										bg: badge.bg,
										color: badge.color,
									}}
								>
									{badge.genre}
								</Badge>
							))}
					</HStack>
				</VStack>
			</CardBody>
		</Card>
	);
};

export default BlogCard;
