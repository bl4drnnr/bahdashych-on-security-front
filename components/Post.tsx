import React from "react";

interface IPost {
  title: string;
  slug: string;
  content: string;
}

const Post: React.FC<IPost> =
  React.forwardRef(({ ...props }: IPost, ref) => {
  return (
    <>
    </>
  );
});

Post.displayName = "Post";

export default Post;
