import { chakra } from '@chakra-ui/react';
import React from 'react';

import config from 'configs/app';
import { Image } from 'toolkit/chakra/image';

import TokenLogoPlaceholder from './TokenLogoPlaceholder';

type Props = {
  isLoading?: boolean;
  className?: string;
  type?: 'primary' | 'secondary';
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
      src="/static/xrp-logo.png"
      alt={ `${ config.chain.currency.symbol } logo` }
      fallback={ <TokenLogoPlaceholder borderRadius="base" className={ className }/> }
    />
  );
};

export default chakra(NativeTokenIcon);
