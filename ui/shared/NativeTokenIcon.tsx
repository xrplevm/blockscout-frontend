import { Image, chakra } from '@chakra-ui/react';
import React from 'react';

import config from 'configs/app';

import TokenLogoPlaceholder from './TokenLogoPlaceholder';

type Props = {
  className?: string;
};

const NativeTokenIcon = ({ className }: Props) => {
  return (
    <Image
      borderRadius="base"
      className={ className }
      style={{
        backgroundColor: 'white',
        padding: '2px',
      }}
      src="https://cryptologos.cc/logos/xrp-xrp-logo.png?v=040"
      alt={ `${ config.chain.currency.symbol } logo` }
      fallback={ <TokenLogoPlaceholder borderRadius="base" className={ className }/> }
      fallbackStrategy="beforeLoadOrError"
    />
  );
};

export default chakra(NativeTokenIcon);
