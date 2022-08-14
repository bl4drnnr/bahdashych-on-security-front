import React from "react";
import { IPosts } from "../interfaces/posts.interface";
import Post from "./Post.component";

const Posts: React.FC<IPosts> =
  React.forwardRef(({ rows, count }: IPosts, ref) => {
    return (
      <>
        {rows.map(post => (
          <>
            <Post
              slug={post.slug}
              title={post.title}
            />
          </>
        ))}
      </>
    )
  })

Posts.displayName = "Posts";

export default Posts;
