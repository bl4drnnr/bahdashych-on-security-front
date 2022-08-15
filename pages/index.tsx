import React from "react";
import dayjs from "dayjs";
import MainLayout from "../layouts/main.layout";
import Posts from "../components/Posts.component";
import Pagination from "../components/Pagination.component";
import { IPosts } from "../interfaces/posts.interface";
import { useGetPostsService as UseGetPostsService } from "../services/post/useGetPosts.service";
import { GetServerSideProps } from "next";

const Home = ({ posts }: { posts: IPosts }) => {
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <MainLayout>
      <>
        <h1 className={'mt-3 text-center text-3xl font-extrabold text-gray-900'}>
          {posts.rows.length ? (<>List of posts</>) : (<>No posts yet</>)}
        </h1>
        {posts.rows.length ? (
          <Posts rows={posts.rows} count={posts.count} />
        ) : null}
        <Pagination total={30} />
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

export default Home;
