import { Button, VStack } from '@chakra-ui/react';
import React from 'react';

import type { Screen } from '../types';

interface Props {
  onSelectMethod: (screen: Screen) => void;
}

const AuthModalScreenSelectMethod = ({ onSelectMethod }: Props) => {

  const handleEmailClick = React.useCallback(() => {
    onSelectMethod({ type: 'email' });
  }, [ onSelectMethod ]);

  const handleConnectWalletClick = React.useCallback(() => {
    onSelectMethod({ type: 'connect_wallet' });
  }, [ onSelectMethod ]);

  return (
    <VStack spacing={ 3 } mt={ 4 } align="stretch">
      <Button variant="outline" onClick={ handleConnectWalletClick }>Connect Web3 wallet</Button>
      <Button variant="outline" onClick={ handleEmailClick }>Continue with email</Button>
    </VStack>
  );
};

export default React.memo(AuthModalScreenSelectMethod);