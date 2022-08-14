import React from "react";
import { IPost } from "../interfaces/post.interface";
import MainLayout from "../layouts/main.layout";

const Post: React.FC<IPost> =
  React.forwardRef(({ ...props }: IPost, ref) => {
  return (
    <MainLayout>
      <></>
    </MainLayout>
  );
});

Post.displayName = "Post";

export default Post;
