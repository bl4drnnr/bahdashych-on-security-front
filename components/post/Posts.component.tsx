import React from "react";
import Post from "./Post.component";
import { IPosts } from "@interfaces/posts.interface";

const Posts: React.FC<IPosts> =
  React.forwardRef(({ rows }: IPosts, ref) => {
    return (
      <>
        {rows.map(post => (
          <div key={post.slug}>
            <Post
              id={post.id}
              description={post.description}
              slug={post.slug}
              title={post.title}
            />
          </div>
        ))}
      </>
    )
  })

Posts.displayName = "Posts";

export default Posts;
