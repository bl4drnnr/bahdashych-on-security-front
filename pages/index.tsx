import React from "react";
import MainLayout from "../layouts/main.layout";
import Posts from "../components/post/Posts.component";
import Pagination from "../components/post/Pagination.component";
import { IPosts } from "../models/response/posts.interface";
import { useGetPostsService as UseGetPostsService } from "../services/post/useGetPosts.service";
import { GetServerSideProps } from "next";

const Home = ({ posts }: { posts: IPosts }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { getPosts } = UseGetPostsService();

  const changeRowsPerPage = (rows: number) => {
    setRowsPerPage(rows)
    fetchPosts().then()
  }

  const changePage = (page: number) => {
    setPage(page)
    fetchPosts().then()
  }

  const fetchPosts = async () => {
    posts = await getPosts({
      offset: 0,
      limit: rowsPerPage
    })
  }

  return (
    <MainLayout>
      <>
        <h1 className={'mt-3 text-center text-3xl font-extrabold text-gray-900'}>
          {posts.rows.length ? (<>List of posts</>) : (<>No posts yet</>)}
        </h1>
        {posts.rows.length ? (
          <>
            <Posts rows={posts.rows} count={posts.count} />
            <Pagination
              count={posts.count}
              currentPage={page}
              setPage={changePage}
              rowsPerPageItems={[5, 10, 15]}
              rowsPerPage={rowsPerPage}
              rowsPerPageChange={changeRowsPerPage}
            />
          </>
        ) : null}
      </>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { getPosts } = UseGetPostsService();
  const posts = await getPosts({
    offset: 0,
    limit: 10
  });

  return { props: { posts } }
}

export default Home;
