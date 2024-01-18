const semanticTokens = {
  colors: {
    divider: {
      default: "blackAlpha.200",
      _dark: "whiteAlpha.200",
    },
    text: {
      default: "tertiary",
      _dark: "whiteAlpha.800",
    },
    text_secondary: {
      default: "gray.500",
      _dark: "gray.400",
    },
    link: {
      default: "primary",
      _dark: "white",
    },
    link_hovered: {
      default: "primary",
      _dark: "white",
    },
    error: {
      default: "red.400",
      _dark: "red.300",
    },
  },
  shadows: {
    action_bar:
      "0 4px 4px -4px rgb(0 0 0 / 10%), 0 2px 4px -4px rgb(0 0 0 / 6%)",
  },
};

export default semanticTokens;
