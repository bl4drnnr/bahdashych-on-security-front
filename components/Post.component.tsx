import React from "react";
import { IPostPreview } from "../interfaces/post-preview.interface";

const Post: React.FC<IPostPreview> =
  React.forwardRef(({ ...props }: IPostPreview, ref) => {
  return (
    <>
    </>
  );
});


Post.displayName = "Post";

export default Post;
