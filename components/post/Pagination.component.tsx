import React from "react";
import PaginationBar from "../ui/PaginationBar.component";
import DropDown from "../ui/DropDown.component";

interface IPagination {
  total: number;
}

const Pagination: React.FC<IPagination> =
  React.forwardRef(({ ...props }: IPagination, ref) => {
  return (
    <div className={'w-full flex'}>
      <div className={'m-auto'}>
        <PaginationBar />
        <DropDown />
      </div>
    </div>
  )
});

Pagination.displayName = "Pagination";

export default Pagination;
