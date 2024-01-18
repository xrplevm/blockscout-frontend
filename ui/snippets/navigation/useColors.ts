import { useColorModeValue } from "@chakra-ui/react";

export default function useColors() {
  return {
    text: {
      default: useColorModeValue("black", "white"),
      active: "white",
      hover: "primary",
    },
    bg: {
      default: "transparent",
      active: "primary",
    },
    border: {
      default: "divider",
      active: useColorModeValue("blue.50", "gray.800"),
    },
  };
}
