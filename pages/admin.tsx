import React from "react";
import MainLayout from "../layouts/main.layout";
import { parseJwt } from "../utils/verify-token.util";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { IPosts } from "../models/response/posts.interface";
import { useGetPostsService as UseGetPostsService } from "../services/post/useGetPosts.service";
import { useGetUsersService as UseGetUsersService } from "../services/user/useGetUsers.service";
import dayjs from "dayjs";
import AdminHeader from "../components/admin/AdminHeader.component";
import AdminPost from "../components/admin/AdminPost.component";
import AdminUser from "../components/admin/AdminUser.component";
import { IUser } from "../models/user.interface";

const Admin = ({ posts, users }: { posts: IPosts, users: IUser[] }) => {
  const [currentSection, setCurrentSection] = React.useState('post');
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
        <AdminHeader setSection={setCurrentSection} />
        {currentSection === 'posts' ? (
          <AdminPost />
        ) : (
          <AdminUser />
        )}
      </>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { getPosts } = UseGetPostsService();
  const { getUsers } = UseGetUsersService();

  const posts = await getPosts({
    offset: 0,
    limit: 10,
    from: dayjs().subtract(7, 'days').format('YYYY-MM-DD'),
    to: dayjs().endOf('day').format('YYYY-MM-DD')
  });
  const users = await getUsers({
    offset: 0,
    limit: 10
  })

  return { props: { posts, users } }
}

export default Admin;
