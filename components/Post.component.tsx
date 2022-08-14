import React from "react";
import MainLayout from "../layouts/main.layout";
import { IPost } from "../interfaces/post.interface";
import { GetServerSideProps } from "next";

const Post: React.FC<IPost> =
  React.forwardRef(({ ...props }: IPost, ref) => {
  return (
    <MainLayout>
      <></>
    </MainLayout>
  );
});

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug;
  return {
    props: {}
  }
}

Post.displayName = "Post";

export default Post;
