import React from "react";
import PaginationBar from "../ui/PaginationBar.component";
import DropDown from "../ui/DropDown.component";

interface IPagination {
  count: number;
  items: Array<string | number>
  value: string | number
}

const Pagination: React.FC<IPagination> =
  React.forwardRef(({ count, items, value }: IPagination, ref) => {
  return (
    <div className={'w-full flex'}>
      <div className={'m-auto'}>
        <PaginationBar
          count={count}
        />
        <DropDown
          items={items}
          value={value}
        />
      </div>
    </div>
  )
});

Pagination.displayName = "Pagination";

export default Pagination;
