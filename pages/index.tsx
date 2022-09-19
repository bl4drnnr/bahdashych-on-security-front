import React from "react";
import MainLayout from "@layouts/main.layout";
import Posts from "@components/post/Posts.component";
import Pagination from "@components/post/Pagination.component";
import Loader from "@components/ui/Loader.component";
import BasicInput from "@components/ui/BasicInput.component";
import styles from "@styles/pages/homepage.module.scss"
import { IPosts } from "@interfaces/posts.interface";
import { useGetPostsService as UseGetPostsService } from "@services/post/list/getPosts.service";
import { useGetPostByQueryService } from "@services/post/find/getPostByQuery.service";

const Home = () => {
  const [query, setQuery] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [posts, setPosts] = React.useState<IPosts>({ count: 0, rows: [] })
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { getPosts } = UseGetPostsService();
  const { getPostByQuery } = useGetPostByQueryService()

  const changeRowsPerPage = async (rows: number) => {
    await fetchPosts(rows * page, rows)
    setRowsPerPage(rows)
  }

  const changePage = async (page: number) => {
    await fetchPosts(rowsPerPage * page, rowsPerPage)
    setPage(page)
  }

  const fetchPostsByQuery = async () => {
    setLoading(true)
    const filteredPosts = await getPostByQuery({ query })
    setPosts(filteredPosts)
    setLoading(false)
  }

  const fetchPosts = async (offset: number, limit: number) => {
    setLoading(true)
    const listOfPosts = await getPosts({ offset, limit })
    setPosts(listOfPosts)
    setLoading(false)
  }

  React.useEffect(() => {
    if (query.length) fetchPostsByQuery().then()
    else fetchPosts(10, 0).then()
  }, [query])

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Mikhail Bahdashych</h1>
          <h1>Full stack web developer / Security operations specialist</h1>
          <p>Welcome, my name is Mikhail Bahdashych and here I write about things I like - modern web development, cybersecurity and trading.</p>
          <p>Actually, you can think that this is just my diary, but I hope, you&apos;ll be able to find something interesting for your and about my projects.</p>
        </div>
      </div>
      {/*<>*/}
      {/*  {loading ? (<Loader/>) : null}*/}
      {/*  <h1>*/}
      {/*    {posts?.rows.length ?*/}
      {/*      (<>List of posts</>) :*/}
      {/*      (<>No posts yet</>)*/}
      {/*    }*/}
      {/*  </h1>*/}
      {/*  {posts?.rows.length ? (*/}
      {/*    <BasicInput*/}
      {/*      type={'text'}*/}
      {/*      placeholder={'Search...'}*/}
      {/*      value={query}*/}
      {/*      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>*/}
      {/*        setQuery(e.target.value)}*/}
      {/*    />*/}
      {/*  ) : null}*/}
      {/*  {posts?.rows.length ?*/}
      {/*    (*/}
      {/*      <>*/}
      {/*        <Posts rows={posts.rows} count={posts.count} />*/}
      {/*        <Pagination*/}
      {/*          count={posts.count}*/}
      {/*          currentPage={page}*/}
      {/*          setPage={changePage}*/}
      {/*          rowsPerPageItems={[5, 10, 15]}*/}
      {/*          rowsPerPage={rowsPerPage}*/}
      {/*          rowsPerPageChange={changeRowsPerPage}*/}
      {/*        />*/}
      {/*      </>*/}
      {/*    ) :*/}
      {/*    null }*/}
      {/*</>*/}
    </MainLayout>
  );
};

export default Home;
