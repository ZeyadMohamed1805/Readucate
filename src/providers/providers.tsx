"use client";

import { ProvidersPropsType } from "@/types/types";
import { ChakraProvider } from "@chakra-ui/react";

const Providers = ({ children }: ProvidersPropsType) => {
	return <ChakraProvider>{children}</ChakraProvider>;
};

export default Providers;
