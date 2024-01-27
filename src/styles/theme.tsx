import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const theme: ThemeOverride = extendTheme({
	components: {
		Container: {
			variants: {
				"wrapper-custom": {
					maxW: "1400px",
					width: "100%",
				},
			},
		},
		Heading: {
			variants: {
				"h1-custom": {
					fontSize: ["60px", "80px", "100px"],
					fontWeight: 700,
					lineHeight: "100%",
				},
				"h2-custom": {
					fontSize: "36px",
					fontWeight: 700,
				},
				"h3-custom": {
					fontSize: "24px",
					fontWeight: 600,
				},
			},
		},
		Text: {
			variants: {
				"text-custom": {
					fontSize: "16px",
					fontWeight: 400,
					color: "#667085",
				},
			},
		},
		Button: {
			variants: {
				"primary-cta": {
					backgroundColor: "#7F56D9",
					color: "#F9F5FF",
					border: "solid 2px #7F56D9",
					_hover: {
						opacity: 0.75,
					},
				},
				"secondary-cta": {
					backgroundColor: "#F9F5FF",
					color: "#7F56D9",
					border: "solid 2px #7F56D9",
					_hover: {
						opacity: 0.75,
					},
				},
			},
		},
	},
});

export default theme;
