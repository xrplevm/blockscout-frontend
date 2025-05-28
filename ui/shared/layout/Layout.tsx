import React from 'react';

import type { Props } from './types';

import AppErrorBoundary from 'ui/shared/AppError/AppErrorBoundary';
import HeaderAlert from 'ui/snippets/header/HeaderAlert';
import HeaderDesktop from 'ui/snippets/header/HeaderDesktop';
import HeaderMobile from 'ui/snippets/header/HeaderMobile';

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
