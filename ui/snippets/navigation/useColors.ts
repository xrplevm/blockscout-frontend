import { useColorModeValue } from '@chakra-ui/react';

export default function useColors() {
  return {
    text: {
      'default': useColorModeValue('gray.600', 'gray.400'),
      active: useColorModeValue('purple.800', 'purple.300'),
      hover: 'link_hovered',
    },
    bg: {
      'default': 'transparent',
      active: useColorModeValue('purple.300', 'purple.800'),
    },
    border: {
      'default': 'divider',
      active: useColorModeValue('purple.500', 'purple.800'),
    },
  };
}
