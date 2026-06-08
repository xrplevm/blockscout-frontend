import { Box } from '@chakra-ui/react';
import React from 'react';

import { useColorModeValue } from 'toolkit/chakra/color-mode';

export default function PeersystPageWrapper({ children }: { children: React.ReactNode }) {
  const bgColor = useColorModeValue('#FFFFFF', 'gray.800');

  return (
    <Box
      backgroundColor={ bgColor }
      borderRadius="lg"
      borderWidth="1px"
      borderColor="border.divider"
      padding={{ base: 6, lg: 8 }}
      overflow="hidden"
    >
      { children }
    </Box>
  );
}
