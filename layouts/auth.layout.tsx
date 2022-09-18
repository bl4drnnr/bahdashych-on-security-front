import React from "react";
import AuthHeader from "@components/ui/AuthHeader.component";

const AuthLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <AuthHeader signInRoute={location.pathname !== '/sign-in'} />
      {children}
    </>
  );
};

export default AuthLayout;
