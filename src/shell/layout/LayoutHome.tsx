// SPDX-License-Identifier: LicenseRef-Blockscout

import React from 'react';

import type { Props } from './types';

import HeaderAlert from 'src/shell/header/HeaderAlert';
import HeaderMobile from 'src/shell/header/HeaderMobile';

import AppErrorBoundary from 'src/shared/errors/AppErrorBoundary';

import * as Layout from './components';

const LayoutHome = ({ children }: Props) => {
  return (
    <Layout.Root content={ children }>
      <Layout.Container>
        <Layout.TopRow/>
        <Layout.NavBar/>
        <HeaderMobile hideSearchButton/>
        <Layout.MainArea>
          <Layout.SideBar/>
          <Layout.MainColumn
            paddingTop={{ base: 3, lg: 6 }}
          >
            <HeaderAlert mb={ 3 }/>
            <AppErrorBoundary>
              { children }
              { /* eslint-disable-next-line @next/next/no-img-element */ }
              <img
                src="/static/bg-lines-left.png"
                style={{
                  top: '50%',
                  left: 0,
                  width: '20vw',
                  position: 'absolute',
                  zIndex: -1,
                  transform: 'translateY(-50%)',
                }}
                alt="bg-lines-left"
              />
            </AppErrorBoundary>
            { /* eslint-disable-next-line @next/next/no-img-element */ }
            <img
              src="/static/bg-lines-right.png"
              style={{
                width: '15vw',
                top: '50%',
                zIndex: -1,
                position: 'absolute',
                right: 0,
                transform: 'translateY(-50%)',
              }}
              alt="bg-lines-right"
            />
          </Layout.MainColumn>
        </Layout.MainArea>
        <Layout.Footer/>
      </Layout.Container>
    </Layout.Root>
  );
};

export default LayoutHome;
