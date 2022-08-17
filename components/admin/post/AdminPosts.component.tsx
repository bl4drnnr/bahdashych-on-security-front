import React from "react";
import { IPosts } from "../../../models/response/posts.interface";
import BasicButton from "../../ui/BasicButton.component";
import { useRouter } from "next/router";
import { IPost } from "../../../models/post.interface";

const AdminPosts = ({ rows, removePost }: IPosts) => {
  const router = useRouter()
  return (
    <div className={'w-full flex'}>
      <div className={'m-auto'}>
        {rows.map(post => (
          <div key={post.slug} className={'border-solid border p-4 m-2 rounded cursor-pointer'}>
            <h1
              onClick={async () => {return await router.push(`/post/${post.slug}`)}}
            >Post title: {post.title}</h1>
            {/*<BasicButton*/}
            {/*  className={'bg-red-600 hover:bg-red-800'}*/}
            {/*  onClick={() => {}}*/}
            {/*>*/}
            {/*  DELETE POST*/}
            {/*</BasicButton>*/}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPosts;
