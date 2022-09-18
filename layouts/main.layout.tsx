import React from "react";
import Header from "../components/ui/Header.component";
import styles from "../styles/main-layout.module.scss"

const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
