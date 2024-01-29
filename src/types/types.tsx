export type ChildrenPropsType = Readonly<{
	children: React.ReactNode;
}>;

export type RootLayoutPropsType = ChildrenPropsType;

export type ProvidersPropsType = ChildrenPropsType;

export type BadgeType = {
	genre: string;
	bg: string;
	color: string;
};

export type BlogCardPropsType = {
	card: {
		image: string;
		direction: Array<string>;
		date: string;
		title: string;
		author: string;
		description: string;
		badges: {
			display: Array<string>;
			content?: Array<BadgeType>;
		};
	};
};
