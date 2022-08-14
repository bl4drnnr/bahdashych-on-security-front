import React from 'react';
import type { NextPage } from 'next';
import Header from '../components/Header';
import Loader from "../components/Loader";
import { useGetPostsService } from "../services/post/useGetPosts.service";
import dayjs from 'dayjs';
import { IPost } from "../interfaces/post.interface";

const Home: NextPage = () => {
  const [posts, setPosts] = React.useState<IPost[] | undefined>([]);
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { getPosts, loading, error } = useGetPostsService();

  const getPostsHandler = async () => {
    const posts = await getPosts({
      offset: 10,
      limit: 10,
      from: dayjs().subtract(7, 'days').format('YYYY-MM-DD'),
      to: dayjs().format('YYYY-MM-DD')
    });
    setPosts(posts);
  }

  React.useEffect(() => {
    getPostsHandler().then()
  }, [])

  return (
    <>
      {loading ? <Loader/> : null}
      <Header/>
    </>
  );
};

export default Home;
