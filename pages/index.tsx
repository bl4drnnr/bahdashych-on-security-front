import React from "react";
import dayjs from "dayjs";
import { IPost } from "../interfaces/post.interface";
import { useGetPostsService } from "../services/post/useGetPosts.service";
import Loader from "../components/Loader.component";
import MainLayout from "../layouts/main.layout";
import Posts from "../components/Posts.component";

const Home = ({ posts }: { posts: IPost[] | undefined }) => {
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

export async function getStaticProps() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getPosts, loading, error } = useGetPostsService();
  const posts = await getPosts({
    offset: 10,
    limit: 10,
    from: dayjs().subtract(7, 'days').format('YYYY-MM-DD'),
    to: dayjs().format('YYYY-MM-DD')
  });

  return { props: { posts } }
}

export default Home;
