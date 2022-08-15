import React from "react";
import MainLayout from "../layouts/main.layout";
import { parseJwt } from "../utils/verify-token.util";
import { useRouter } from "next/router";
import { NextPage } from "next";

const Admin: NextPage = () => {
  const router = useRouter()

  const handleRedirect = (path: string) => {
    return router.push(path)
  }

  const checkForPermissions = async () => {
    const token = sessionStorage.getItem('_at')
    if (!token) return await handleRedirect('/')

    const parsedToken = parseJwt(token);
    const isAdmin = parsedToken.roles.find((role) => role.value === 'ADMIN')
    if (!isAdmin) return await handleRedirect('/')
  }

  React.useEffect(() => {
    checkForPermissions().then()
  }, [])

  return (
    <MainLayout>
      <></>
    </MainLayout>
  );
};

export default Admin;
