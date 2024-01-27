import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const theme: ThemeOverride = extendTheme({
	components: {
		Heading: {
			variants: {
				"h1-custom": {
					fontSize: "60px",
					fontWeight: 700,
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
			defaultProps: {
				fontSize: "16px",
				fontWeight: 400,
				color: "#667085",
			},
		},
		Button: {
			variants: {
				"primary-cta": {
					backgroundColor: "#7F56D9",
					color: "#F9F5FF",
					_hover: {
						opacity: 0.75,
					},
				},
				"secondary-cta": {
					backgroundColor: "#F9F5FF",
					color: "#7F56D9",
					_hover: {
						opacity: 0.75,
					},
				},
			},
		},
	},
});

export default theme;
