import React from "react";
import { IPost } from "../interfaces/post.interface";

interface IPosts {
  posts: IPost[]
}

const Posts: React.FC<IPosts> =
  React.forwardRef(({ ...props }: IPosts, ref) => {
    return (
      <></>
    )
  })

Posts.displayName = "Posts";

export default Posts;
