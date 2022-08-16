import React from "react";
import MainLayout from "../layouts/main.layout";
import { parseJwt } from "../utils/verify-token.util";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { IPosts } from "../models/response/posts.interface";
import { useGetPostsService as UseGetPostsService } from "../services/post/useGetPosts.service";
import dayjs from "dayjs";
import AdminHeader from "../components/admin/AdminHeader.component";
import AdminPost from "../components/admin/AdminPost.component";
import AdminUser from "../components/admin/AdminUser.component";
import { IUser } from "../models/user.interface";
import { useGetUsersService } from "../services/user/useGetUsers.service";

const Admin = ({ posts }: { posts: IPosts }) => {
  const [currentSection, setCurrentSection] = React.useState('posts');
  const [users, setUsers] = React.useState<IUser[] | undefined>([]);

  const { getUsers } = useGetUsersService()
  const router = useRouter()

  const handleRedirect = (path: string) => {
    return router.push(path)
  }

  const getListOfUsers = async () => {
    const listOfUsers = await getUsers({
      offset: 0,
      limit: 10
    }, sessionStorage.getItem('_at'))
    setUsers(listOfUsers)
  }

  const checkForPermissions = async () => {
    const token = sessionStorage.getItem('_at')
    if (!token) return await handleRedirect('/')

    const parsedToken = parseJwt(token);
    const isAdmin = parsedToken.roles.find((role) => role.value === 'ADMIN')
    if (!isAdmin) return await handleRedirect('/')
  }

  React.useEffect(() => {
    checkForPermissions().then(() => {
      getListOfUsers().then()
    })
  }, [])

  return (
    <MainLayout>
      <>
        <AdminHeader
          setSection={setCurrentSection}
          activeSection={currentSection}
        />
        {currentSection === 'posts' ? (
          <AdminPost
            posts={posts}
          />
        ) : (
          <AdminUser
            users={users}
          />
        )}
      </>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { getPosts } = UseGetPostsService();

  const posts = await getPosts({
    offset: 0,
    limit: 10,
    from: dayjs().subtract(7, 'days').format('YYYY-MM-DD'),
    to: dayjs().endOf('day').format('YYYY-MM-DD')
  });

  return { props: { posts } }
}

export default Admin;
