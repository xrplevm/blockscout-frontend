import React from 'react';

import type { Props } from './types';

import AppErrorBoundary from 'ui/shared/AppError/AppErrorBoundary';
import HeaderAlert from 'ui/snippets/header/HeaderAlert';
import HeaderDesktop from 'ui/snippets/header/HeaderDesktop';
import HeaderMobile from 'ui/snippets/header/HeaderMobile';

import * as Layout from './components';

const LayoutDefault = ({ children }: Props) => {
  return (
    <Layout.Container>
      <Layout.TopRow />
      <HeaderMobile />
      <Layout.MainArea>
        <Layout.SideBar />

        <Layout.MainColumn>
          <HeaderAlert />
          <img
            src='/static/bg-top.png'
            style={{
              left: 0,
              top: 0,
              width: '25vw',
              position: 'absolute',
              zIndex: -1,
            }}
          />
          <HeaderDesktop />
          <AppErrorBoundary>
            <Layout.Content>{children}</Layout.Content>
          </AppErrorBoundary>
        </Layout.MainColumn>
      </Layout.MainArea>
      <Layout.Footer />
    </Layout.Container>
  );
};

export default LayoutDefault;
