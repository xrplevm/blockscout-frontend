import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export default function PeersystPageWrapper({ children }: { children: React.ReactNode }): JSX.Element {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box backgroundColor={ bgColor } borderRadius="md" padding={{ base: 6, lg: 8 }}>
      { children }
    </Box>
  );
}
