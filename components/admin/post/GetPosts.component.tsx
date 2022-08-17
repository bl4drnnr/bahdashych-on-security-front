import React from "react";
import { IPosts } from "../../../models/response/posts.interface";
import Posts from "../../post/Posts.component";
import Pagination from "../../post/Pagination.component";

interface IAdminGetPosts {
  posts: IPosts;
  fetchPosts: (offset: number, limit: number) => Promise<void>
}

const GetPosts = ({ posts, fetchPosts }: IAdminGetPosts) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const changeRowsPerPage = async (rows: number) => {
    await fetchPosts(rows * page, rows)
    setRowsPerPage(rows)
  }

  const changePage = async (page: number) => {
    await fetchPosts(rowsPerPage * page, rowsPerPage)
    setPage(page)
  }

  return (
    <>
      <Posts count={posts.count} rows={posts.rows} />
      <Pagination
        count={posts.count}
        currentPage={page}
        setPage={changePage}
        rowsPerPageItems={[5, 10, 15]}
        rowsPerPage={rowsPerPage}
        rowsPerPageChange={changeRowsPerPage}
      />
    </>
  );
};

export default GetPosts;
