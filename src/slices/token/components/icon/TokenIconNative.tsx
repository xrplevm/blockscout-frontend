// SPDX-License-Identifier: LicenseRef-Blockscout

import { chakra } from '@chakra-ui/react';
import React from 'react';

import TokenIconPlaceholder from 'src/slices/token/components/icon/TokenIconPlaceholder';

import config from 'src/config';

import { Image } from 'src/toolkit/chakra/image';

type Props = {
  isLoading?: boolean;
  className?: string;
  type?: 'primary' | 'secondary';
};

const TokenIconNative = ({ className }: Props) => {
  return (
    <Image
      className={ className }
      borderRadius="base"
      style={{
        backgroundColor: 'white',
        padding: '2px',
      }}
      src="/static/xrp-logo.png"
      alt={ `${ config.chain.currency.symbol } logo` }
      fallback={ <TokenIconPlaceholder/> }
    />
  );
};

export default chakra(TokenIconNative);
