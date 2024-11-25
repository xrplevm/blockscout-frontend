import React from 'react';

import type { RoutedTab } from 'ui/shared/Tabs/types';

import PeersystPageWrapper from 'theme/components/PeersystPageWrapper';
import PrivateAddressTags from 'ui/privateTags/PrivateAddressTags';
import PrivateTransactionTags from 'ui/privateTags/PrivateTransactionTags';
import PageTitle from 'ui/shared/Page/PageTitle';
import RoutedTabs from 'ui/shared/Tabs/RoutedTabs';
import useRedirectForInvalidAuthToken from 'ui/snippets/auth/useRedirectForInvalidAuthToken';

const TABS: Array<RoutedTab> = [
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
