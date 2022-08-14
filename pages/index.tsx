import React from "react";
import dayjs from "dayjs";
import MainLayout from "../layouts/main.layout";
import Loader from "../components/Loader.component";
import Posts from "../components/Posts.component";
import { IPost } from "../interfaces/post.interface";
import { IError } from "../interfaces/error.interface";
import { useGetPostsService as UseGetPostsService } from "../services/post/useGetPosts.service";
import { GetServerSideProps } from "next";

const Home = ({ posts }: { posts: IPost[] | null }) => {
  // const [posts, setPosts] = React.useState<IPost[] | undefined>([]);
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <MainLayout>
      <>
        {/*{loading ? <Loader/> : null}*/}
        {posts?.length ? (
          <Posts posts={posts} />
        ) : (
          <h1>No posts yet.</h1>
        )}
      </>
    </MainLayout>
  );
};

const fetchData = async () => {
  const { getPosts } = UseGetPostsService();
  const posts = await getPosts({
    offset: '1',
    limit: '10',
    from: dayjs().subtract(7, 'days').format('YYYY-MM-DD'),
    to: dayjs().format('YYYY-MM-DD')
  })
  console.log('postspostsposts', posts)
  return posts;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchData()
  console.log('datadatadatadatadatadatadatadata', data);

  return { props: { posts: data } }
}

export default Home;
