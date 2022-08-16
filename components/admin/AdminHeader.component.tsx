import React from "react";

const AdminHeader = (
  { setSection, activeSection }:
  { setSection: (e: string) => void, activeSection: string }
) => {
  return (
    <div className="flex w-full mt-2">
      <div className="m-auto">
        <ul className="flex border-b">
          <li
            className="mr-1 cursor-pointer"
            onClick={() => setSection('posts')}
          >
            <a className={`bg-white inline-block py-2 px-4 font-semibold 
            ${activeSection === 'posts' ? 'border-l border-t border-r rounded-t text-blue-700' : 'text-blue-500 hover:text-blue-800'}
             `}
            >Posts</a>
          </li>
          <li
            className="mr-1 cursor-pointer"
            onClick={() => setSection('users')}
          >
            <a className={`bg-white inline-block py-2 px-4 font-semibold 
            ${activeSection === 'users' ? 'border-l border-t border-r rounded-t text-blue-700' : 'text-blue-500 hover:text-blue-800'}
             `}
            >Users</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHeader;
