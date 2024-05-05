"use client";
import { ChakraProvider } from "@chakra-ui/react";

const Chakra = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
export { Chakra };
