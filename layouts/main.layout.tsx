import React from "react";
import Header from "../components/ui/Header.component";

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
