import React from "react";
import Header from "../components/Header.component";

const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
