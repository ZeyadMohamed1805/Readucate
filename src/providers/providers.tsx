"use client";

import { ProvidersPropsType } from "@/types/types";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";

const Providers = ({ children }: ProvidersPropsType) => {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Providers;
