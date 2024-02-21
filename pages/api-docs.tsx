import type { NextPage } from 'next';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

import SwaggerUI from 'ui/apiDocs/SwaggerUI';

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/api-docs">
      <SwaggerUI/>
    </PageNextJs>
  );
};

export default Page;

export { apiDocs as getServerSideProps } from 'nextjs/getServerSideProps';
