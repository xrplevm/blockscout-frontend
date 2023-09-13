import type { ApiData, Metadata } from './types';

import type { Route } from 'nextjs-routes';

import config from 'configs/app';
import getNetworkTitle from 'lib/networks/getNetworkTitle';

import compileValue from './compileValue';
import getPageOgType from './getPageOgType';
import * as templates from './templates';

export default function generate<R extends Route>(route: R, apiData?: ApiData<R>): Metadata {
  const params = {
    ...route.query,
    ...apiData,
    network_name: config.chain.name,
    network_title: getNetworkTitle(),
  };

  const title = compileValue(templates.title.make(route.pathname), params) + (config.meta.promoteBlockscout ? ' | Blockscout' : '');
  const description = compileValue(templates.description.make(route.pathname), params);

  const pageOgType = getPageOgType(route.pathname);

  return {
    title: title,
    description,
    opengraph: {
      title: title,
      description: pageOgType === 'Homepage' ? config.meta.ogDescription : '',
      imageUrl: pageOgType !== 'Regular page' ? config.meta.ogImageUrl : '',
    },
  };
}
