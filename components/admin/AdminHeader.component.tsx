import React from "react";

const AdminHeader = (
  { setSection, activeSection }:
  { setSection: (e: string) => void, activeSection: string }
) => {
  return (
    <div>
      <div>
        <ul>
          <li onClick={() => setSection('posts')}>
            <a>Posts</a>
          </li>
          <li onClick={() => setSection('users')}>
            <a>Users</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHeader;
