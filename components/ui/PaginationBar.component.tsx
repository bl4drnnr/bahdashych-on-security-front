import React from "react";

interface IPaginationBar {
  currentPage: number;
  pages: number;
  setPage: (page: number) => void
}

const PaginationBar = ({ currentPage, pages, setPage }: IPaginationBar) => {
  return (
    <nav>
      {pages > 1 ? (
      <ul className="inline-flex items-center -space-x-px mb-3">
        {currentPage !== 0 ? (
          <li>
            <a
              className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg bg-indigo-600 hover:bg-indigo-700 hover:text-gray-700 dark:text-gray-400  dark:hover:text-white"
              onClick={() => setPage(currentPage - 1)}
            >
              <span className="sr-only">Previous</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"></path>
              </svg>
            </a>
          </li>
        ) : null}
        {Array.from(Array(pages), (e, i) => {
          return (
            <li key={i}>
              <a
                className={`
                py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-700 cursor-pointer
                ${currentPage === i ? 'bg-gray-300 hover:bg-gray-300': ''}
                `}
                onClick={() => setPage(i)}
              >
                {i + 1}
              </a>
            </li>
          )
        })}
        {currentPage !== (pages - 1) ? (
          <li>
            <a
              className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg bg-indigo-600 hover:bg-indigo-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              onClick={() => setPage(currentPage + 1)}
            >
              <span className="sr-only">Next</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"></path>
              </svg>
            </a>
          </li>
        ) : null}
      </ul>
      ) : null}
    </nav>
  );
};

export default PaginationBar;
