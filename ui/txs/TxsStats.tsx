import type { BoxProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import React from 'react';

import config from 'configs/app';
import useApiQuery from 'lib/api/useApiQuery';
import { useMultichainContext } from 'lib/contexts/multichain';
import getStatsLabelFromTitle from 'lib/stats/getStatsLabelFromTitle';
import { TXS_STATS, TXS_STATS_MICROSERVICE } from 'stubs/tx';
import StatsWidget from 'ui/shared/stats/StatsWidget';

interface Props extends BoxProps {}

const TxsStats = (props: Props) => {
  const multichainContext = useMultichainContext();

  const chainConfig = multichainContext?.chain.app_config || config;
  const isStatsFeatureEnabled = chainConfig.features.stats.isEnabled;
  const rollupFeature = chainConfig.features.rollup;
  const isOptimisticRollup = rollupFeature.isEnabled && rollupFeature.type === 'optimistic';
  const isArbitrumRollup = rollupFeature.isEnabled && rollupFeature.type === 'arbitrum';

  const txsStatsQuery = useApiQuery('stats:pages_transactions', {
    queryOptions: {
      enabled: isStatsFeatureEnabled,
      placeholderData: isStatsFeatureEnabled ? TXS_STATS_MICROSERVICE : undefined,
    },
  });

  const txsStatsApiQuery = useApiQuery('general:txs_stats', {
    queryOptions: {
      enabled: !isStatsFeatureEnabled,
      placeholderData: !isStatsFeatureEnabled ? TXS_STATS : undefined,
    },
  });

  if ((isStatsFeatureEnabled && !txsStatsQuery.data) || (!isStatsFeatureEnabled && !txsStatsApiQuery.data)) {
    return null;
  }

  const isLoading = isStatsFeatureEnabled ? txsStatsQuery.isPlaceholderData : txsStatsApiQuery.isPlaceholderData;

  const txCount24h = isStatsFeatureEnabled ? txsStatsQuery.data?.transactions_24h?.value : txsStatsApiQuery.data?.transactions_count_24h;
  const operationalTxns24hArbitrum = isArbitrumRollup && isStatsFeatureEnabled ? txsStatsQuery.data?.operational_transactions_24h?.value : null;
  const operationalTxns24hOptimistic = isOptimisticRollup && isStatsFeatureEnabled ? txsStatsQuery.data?.op_stack_operational_transactions_24h?.value : null;

  const pendingTxns = isStatsFeatureEnabled ? txsStatsQuery.data?.pending_transactions_30m?.value : txsStatsApiQuery.data?.pending_transactions_count;

  const itemsCount = [
    txCount24h,
    operationalTxns24hArbitrum,
    operationalTxns24hOptimistic,
    pendingTxns,
  ].filter(item => item !== null && item !== undefined).length;

  return (
    <Box
      display="grid"
      gridTemplateColumns={{ base: '1fr', lg: `repeat(${ itemsCount }, calc(${ 100 / itemsCount }% - 9px))` }}
      rowGap={ 3 }
      columnGap={ 3 }
      mb={ 6 }
      { ...props }
    >
      { txCount24h && (
        <StatsWidget
          label={ txsStatsQuery.data?.transactions_24h?.title ?
            getStatsLabelFromTitle(txsStatsQuery.data?.transactions_24h?.title) :
            'Transactions' }
          value={ Number(txCount24h).toLocaleString() }
          period="24h"
          isLoading={ isLoading }
          href={
            chainConfig.features.stats.isEnabled ?
              { pathname: '/stats/[id]', query: { id: 'newTxns', ...(multichainContext?.chain.id ? { chain_id: multichainContext.chain.id } : {}) } } :
              undefined
          }
        />
      ) }
      { operationalTxns24hArbitrum && (
        <StatsWidget
          label={ txsStatsQuery.data?.operational_transactions_24h?.title ?
            getStatsLabelFromTitle(txsStatsQuery.data?.operational_transactions_24h?.title) :
            'Daily op txns' }
          value={ Number(operationalTxns24hArbitrum).toLocaleString() }
          period="24h"
          isLoading={ isLoading }
        />
      ) }
      { operationalTxns24hOptimistic && (
        <StatsWidget
          label={ txsStatsQuery.data?.op_stack_operational_transactions_24h?.title ?
            getStatsLabelFromTitle(txsStatsQuery.data?.op_stack_operational_transactions_24h?.title) :
            'Daily op txns' }
          value={ Number(operationalTxns24hOptimistic).toLocaleString() }
          period="24h"
          isLoading={ isLoading }
        />
      ) }
      { pendingTxns && (
        <StatsWidget
          label={ txsStatsQuery.data?.pending_transactions_30m?.title ?
            getStatsLabelFromTitle(txsStatsQuery.data?.pending_transactions_30m?.title) :
            'Pending transactions' }
          value={ Number(pendingTxns).toLocaleString() }
          period={ isStatsFeatureEnabled ? '30min' : '1h' }
          isLoading={ isLoading }
        />
      ) }
    </Box>
  );
};

export default React.memo(TxsStats);
