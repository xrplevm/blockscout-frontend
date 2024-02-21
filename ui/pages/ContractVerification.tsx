import React from 'react';

import PeersystPageWrapper from 'theme/components/PeersystPageWrapper';
import ContractVerificationForm from 'ui/contractVerification/ContractVerificationForm';
import useFormConfigQuery from 'ui/contractVerification/useFormConfigQuery';
import ContentLoader from 'ui/shared/ContentLoader';
import DataFetchAlert from 'ui/shared/DataFetchAlert';
import PageTitle from 'ui/shared/Page/PageTitle';

const ContractVerification = () => {
  const configQuery = useFormConfigQuery(true);

  const content = (() => {
    if (configQuery.isError) {
      return <DataFetchAlert/>;
    }

    if (configQuery.isPending) {
      return <ContentLoader/>;
    }

    return <ContractVerificationForm config={ configQuery.data }/>;
  })();

  return (
    <PeersystPageWrapper>
      <PageTitle title="Verify & publish contract"/>
      { content }
    </PeersystPageWrapper>
  );
};

export default ContractVerification;
