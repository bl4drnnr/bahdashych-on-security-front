import React from "react";
import AuthHeader from "@components/ui/AuthHeader.component";
import { useRouter } from "next/router";

const AuthLayout = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();

  return (
    <>
      <AuthHeader signInRoute={router.pathname === '/sign-up'} />
      {children}
    </>
  );
};

export default AuthLayout;
