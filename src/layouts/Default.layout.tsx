import React from 'react';

import { Footer } from '@components/Footer/Footer.component';
import { Header } from '@components/Header/Header.component';
import GlobalLayout from '@layouts/Global.layout';
import { MainBox, MainWrapper } from '@styles/layout/default.style';

interface DefaultLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  loading?: boolean;
}

const DefaultLayout = ({ loading, children }: DefaultLayoutProps) => {
  return (
    <GlobalLayout loading={loading}>
      <MainWrapper>
        <Header />
        <MainBox>
          {children}
        </MainBox>
      </MainWrapper>
      <Footer />
    </GlobalLayout>
  );
};

export default DefaultLayout;
