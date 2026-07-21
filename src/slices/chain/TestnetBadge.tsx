// SPDX-License-Identifier: LicenseRef-Blockscout

import { chakra } from '@chakra-ui/react';
import React from 'react';

import config from 'src/config';
import SpriteIcon from 'src/sprite/SpriteIcon';

interface Props {
  className?: string;
}

const TestnetBadge = ({ className }: Props) => {
  if (!config.chain.isTestnet && !config.chain.isDevnet) {
    return null;
  }

  if (config.chain.isDevnet) {
    return <SpriteIcon className={ className } name="devnet" h="14px" w="37px" color="red.400"/>;
  }

  return <SpriteIcon className={ className } name="testnet" h="14px" w="37px" color="yellow.500"/>;
};

export default React.memo(chakra(TestnetBadge));
