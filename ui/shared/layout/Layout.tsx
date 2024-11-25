/* eslint-disable @next/next/no-img-element */
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
              <img
                src="/static/bg-top.png"
                style={{
                  top: 0,
                  left: 0,
                  width: '20vw',
                  position: 'absolute',
                  zIndex: -1,
                }}
                alt="bg-top"
              />
            </Layout.Content>
          </AppErrorBoundary>
          <img
            src="/static/bg-bottom.png"
            style={{
              width: '15vw',
              zIndex: -1,
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
            alt="bg-bottom"
          />
        </Layout.MainColumn>
      </Layout.MainArea>
      <Layout.Footer/>
    </Layout.Container>
  );
};

export default LayoutDefault;
