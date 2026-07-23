// SPDX-License-Identifier: LicenseRef-Blockscout

/* eslint-disable consistent-default-export-name/default-export-match-filename */
import React from 'react';

import type { Props } from './types';

import HeaderAlert from 'src/shell/header/HeaderAlert';
import HeaderDesktop from 'src/shell/header/HeaderDesktop';
import HeaderMobile from 'src/shell/header/HeaderMobile';

import AppErrorBoundary from 'src/shared/errors/AppErrorBoundary';

import * as Layout from './components';

const LayoutDefault = ({ children }: Props) => {
  return (
    <Layout.Root content={ children }>
      <Layout.Container>
        <Layout.TopRow/>
        <Layout.NavBar/>
        <HeaderMobile/>
        <Layout.MainArea>
          <Layout.SideBar/>
          <Layout.MainColumn>
            <HeaderAlert/>
            <HeaderDesktop/>
            <AppErrorBoundary>
              <Layout.Content>
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
              </Layout.Content>
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

export default LayoutDefault;
