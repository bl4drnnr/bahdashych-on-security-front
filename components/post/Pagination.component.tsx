import React from "react";
import PaginationBar from "../ui/PaginationBar.component";
import DropDown from "../ui/DropDown.component";

interface IPagination {
  count: number;
  currentPage: number;
  setPage: (page: number) => void;
  rowsPerPageItems: Array<number>;
  rowsPerPage: number;
  rowsPerPageChange: (rows: number) => void;
}

const Pagination: React.FC<IPagination> =
  React.forwardRef((
    { count, currentPage, setPage, rowsPerPageItems, rowsPerPage, rowsPerPageChange }: IPagination, ref
  ) => {
  return (
    <div>
      <div>
        <PaginationBar
          currentPage={currentPage}
          pages={Math.ceil(count / rowsPerPage)}
          setPage={setPage}
        />
        <DropDown
          rowsPerPageItems={rowsPerPageItems}
          rowsPerPage={rowsPerPage}
          rowsPerPageChange={rowsPerPageChange}
        />
      </div>
    </div>
  )
});

Pagination.displayName = "Pagination";

export default Pagination;
