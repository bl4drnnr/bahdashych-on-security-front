import React from 'react';
import MainLayout from "../../layouts/main.layout";
import { IPost } from "../../interfaces/post.interface";
import { useGetPostService as UseGetPostService } from "../../services/post/useGetPost.service";
import { GetServerSideProps } from "next";

const Slug = ({ post }: { post: IPost }) => {
  return (
    <MainLayout>
      <>
      </>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug: string = context.query.slug as string;
  const { getPost } = UseGetPostService();
  const post = await getPost(slug);

  return { props: { post } }
}

export default Slug;
