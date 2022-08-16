import React from "react";

const AdminHeader = ({ setSection }: { setSection: (e: string) => void }) => {
  return (
    <div className="flex w-full mt-2">
      <div className="m-auto">
        <ul className="flex border-b">
          <li
            className="-mb-px mr-1 cursor-pointer"
            onClick={() => setSection('posts')}
          >
            <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
            >Posts</a>
          </li>
          <li
            className="mr-1 cursor-pointer"
            onClick={() => setSection('users')}
          >
            <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            >Users</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHeader;
