import React from 'react';

import { Footer } from '@components/Footer/Footer.component';
import { Header } from '@components/Header/Header.component';
import GlobalLayout from '@layouts/Global.layout';

interface DefaultLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  loading?: boolean;
}

const DefaultLayout = ({ loading, children }: DefaultLayoutProps) => {
  return (
    <GlobalLayout loading={loading}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </GlobalLayout>
  );
};

export default DefaultLayout;
