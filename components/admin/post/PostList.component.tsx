import React from "react";
import { IPosts } from "../../../interface/posts.interface";
import BasicButton from "../../ui/BasicButton.component";
import { useRouter } from "next/router";

const AdminPosts = ({ removePost, rows }: IPosts) => {
  const router = useRouter()
  return (
    <div>
      <div>
        {rows.map(post => (
          <div key={post.slug}>
            <h1
              onClick={async () => {return await router.push(`/post/${post.slug}`)}}
            >Post title: {post.title}</h1>
            <BasicButton
              onClick={async () => removePost ? removePost(post.id as string) : {}}
            >
              Delete post
            </BasicButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPosts;
