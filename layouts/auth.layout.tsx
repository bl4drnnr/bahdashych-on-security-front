import React from "react";
import AuthHeader from "@components/ui/AuthHeader.component";

const AuthLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
};

export default AuthLayout;
