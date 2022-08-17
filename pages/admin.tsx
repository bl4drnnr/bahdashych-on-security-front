import React from "react";
import MainLayout from "../layouts/main.layout";
import { parseJwt } from "../utils/verify-token.util";
import { useRouter } from "next/router";
import AdminHeader from "../components/admin/AdminHeader.component";
import AdminPost from "../components/admin/AdminPost.component";
import AdminUser from "../components/admin/AdminUser.component";

const Admin = () => {
  const [currentSection, setCurrentSection] = React.useState('posts');

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
      <>
        <AdminHeader
          setSection={setCurrentSection}
          activeSection={currentSection}
        />
        {currentSection === 'posts' ? (<AdminPost />) : (<AdminUser />)}
      </>
    </MainLayout>
  );
};

export default Admin;
