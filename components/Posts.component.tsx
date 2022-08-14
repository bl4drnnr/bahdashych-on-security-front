import React from "react";
import { IPost } from "../interfaces/post.interface";

interface IPosts {
  posts: IPost[]
}

const Posts: React.FC<IPosts> =
  React.forwardRef(({ posts }: IPosts, ref) => {
    return (
      <>
        {JSON.stringify(posts)}
      </>
    )
  })

Posts.displayName = "Posts";

export default Posts;
