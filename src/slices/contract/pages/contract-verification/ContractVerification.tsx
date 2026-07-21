// SPDX-License-Identifier: LicenseRef-Blockscout

import React from 'react';
import PeersystPageWrapper from 'src/theme/components/PeersystPageWrapper';

import PageTitle from 'src/shell/page/title/PageTitle';

import ContractVerificationForm from 'src/slices/contract/pages/contract-verification/ContractVerificationForm';
import useFormConfigQuery from 'src/slices/contract/pages/contract-verification/useFormConfigQuery';

import ApiFetchAlert from 'src/shared/alerts/ApiFetchAlert';

import { ContentLoader } from 'src/toolkit/components/loaders/ContentLoader';

const ContractVerification = () => {
  const configQuery = useFormConfigQuery(true);

  const content = (() => {
    if (configQuery.isError) {
      return <ApiFetchAlert/>;
    }

    if (configQuery.isPending) {
      return <ContentLoader/>;
    }

    return (
      <ContractVerificationForm config={ configQuery.data }/>
    );
  })();

  return (
    <PeersystPageWrapper>
      <PageTitle title="Verify & publish contract"/>
      { content }
    </PeersystPageWrapper>
  );
};

export default ContractVerification;
