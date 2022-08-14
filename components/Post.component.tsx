import React from "react";
import { IPostPreview } from "../interfaces/post-preview.interface";

const Post: React.FC<IPostPreview> =
  React.forwardRef(({ title, slug, description }: IPostPreview, ref) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
});


Post.displayName = "Post";

export default Post;
