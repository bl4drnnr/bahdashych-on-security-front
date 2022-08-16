import React from "react";
import MainLayout from "./main.layout";
import AdminHeader from "../components/AdminHeader.component";

const AdminLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <MainLayout>
      <>
        <AdminHeader />
        <main>
          {children}
        </main>
      </>
    </MainLayout>
  );
};

export default AdminLayout;
