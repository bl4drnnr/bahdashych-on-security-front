import React from "react";
import MainLayout from "../layouts/main.layout";
import Posts from "../components/post/Posts.component";
import Pagination from "../components/post/Pagination.component";
import Loader from "../components/ui/Loader.component";
import { IPosts } from "../models/response/posts.interface";
import { useGetPostsService as UseGetPostsService } from "../services/post/useGetPosts.service";
import { GetServerSideProps } from "next";

const Home = ({ posts }: { posts: IPosts }) => {
  const [loading, setLoading] = React.useState(false);
  const [filteredPosts, setFilteredPosts] = React.useState<IPosts>({ count: 0, rows: [] })
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { getPosts } = UseGetPostsService();

  const changeRowsPerPage = async (rows: number) => {
    setRowsPerPage(rows)
    await fetchPosts(rowsPerPage * page, rowsPerPage)
  }

  const changePage = async (page: number) => {
    setPage(page)
    await fetchPosts(rowsPerPage * page, rowsPerPage)
  }

  const fetchPosts = async (offset: number, limit: number) => {
    setLoading(true)
    const listOfPosts = await getPosts({ offset, limit })
    setFilteredPosts(listOfPosts)
    setLoading(false)
  }

  return (
    <MainLayout>
      <>
        {loading ? (<Loader/>) : null}
        <h1 className={'mt-3 text-center text-3xl font-extrabold text-gray-900'}>
          {filteredPosts.rows.length ?
            (<>List of posts</>) :
            (posts.rows.length ?
              (<>List of posts</>) :
              (<>No posts yet</>))
          }
        </h1>
        {filteredPosts.rows.length ?
          (<>
            <>
              <Posts rows={filteredPosts.rows} count={filteredPosts.count} />
              <Pagination
                count={filteredPosts.count}
                currentPage={page}
                setPage={changePage}
                rowsPerPageItems={[5, 10, 15]}
                rowsPerPage={rowsPerPage}
                rowsPerPageChange={changeRowsPerPage}
              />
            </>
          </>) : (
          (posts.rows.length) ?
            (
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
            ) :
            null )
        }
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
