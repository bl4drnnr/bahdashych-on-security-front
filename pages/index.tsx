import React from "react";
import dayjs from "dayjs";
import MainLayout from "../layouts/main.layout";
import Loader from "../components/Loader.component";
import Posts from "../components/Posts.component";
import { IError } from "../interfaces/error.interface";
import { useGetPostsService as UseGetPostsService } from "../services/post/useGetPosts.service";
import { GetServerSideProps } from "next";
import { IPosts } from "../interfaces/posts.interface";

const Home = ({ posts }: { posts: IPosts }) => {
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <MainLayout>
      <>
        {/*{loading ? <Loader/> : null}*/}
        {posts.rows.length ? (
          <Posts rows={posts.rows} count={posts.count} />
        ) : (
          <h1>No posts yet.</h1>
        )}
      </>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { getPosts } = UseGetPostsService();
  const posts = await getPosts({
    offset: '0',
    limit: '10',
    from: dayjs().subtract(7, 'days').format('YYYY-MM-DD'),
    to: dayjs().endOf('day').format('YYYY-MM-DD')
  });

  return { props: { posts } }
}

export default Home;
