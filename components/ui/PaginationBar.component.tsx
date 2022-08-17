import React from "react";

const PaginationBar = () => {
  return (
    <nav>
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <a className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg bg-indigo-600 hover:bg-indigo-700 hover:text-gray-700 dark:text-gray-400  dark:hover:text-white">
            <span className="sr-only">Previous</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
            </svg>
          </a>
        </li>
        <li>
          <a className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">1</a>
        </li>
        <li>
          <a className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">2</a>
        </li>
        <li>
          <a className="z-10 py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">3</a>
        </li>
        <li>
          <a className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">4</a>
        </li>
        <li>
          <a className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">5</a>
        </li>
        <li>
          <a className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg bg-indigo-600 hover:bg-indigo-700 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
            <span className="sr-only">Next</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationBar;
