// SPDX-License-Identifier: LicenseRef-Blockscout

import React from 'react';
import PeersystPageWrapper from 'src/theme/components/PeersystPageWrapper';

import type { TabItemRegular } from 'src/toolkit/components/AdaptiveTabs/types';

import PageTitle from 'src/shell/page/title/PageTitle';

import useRedirectForInvalidAuthToken from 'src/features/account/hooks/useRedirectForInvalidAuthToken';

import RoutedTabs from 'src/toolkit/components/RoutedTabs/RoutedTabs';

import PrivateAddressTags from './PrivateAddressTags';
import PrivateTransactionTags from './PrivateTransactionTags';

const TABS: Array<TabItemRegular> = [
  { id: 'address', title: 'Address', component: <PrivateAddressTags/> },
  { id: 'tx', title: 'Transaction', component: <PrivateTransactionTags/> },
];

const PrivateTags = () => {
  useRedirectForInvalidAuthToken();

  return (
    <PeersystPageWrapper>
      <PageTitle title="Private tags"/>
      <RoutedTabs tabs={ TABS }/>
    </PeersystPageWrapper>
  );
};

export default PrivateTags;
