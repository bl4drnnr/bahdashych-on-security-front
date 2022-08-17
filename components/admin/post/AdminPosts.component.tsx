import React from "react";
import { IPosts } from "../../../models/response/posts.interface";
import BasicButton from "../../ui/BasicButton.component";

const AdminPosts = ({ rows }: IPosts) => {
  return (
    <div className={'w-full flex'}>
      <div className={'m-auto'}>
        {rows.map(post => (
          <div key={post.slug} className={'border-solid border p-4 m-2 rounded cursor-pointer'}>
            <h1>Post title: {post.title}</h1>
            <BasicButton>
              DELETE POST
            </BasicButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPosts;
