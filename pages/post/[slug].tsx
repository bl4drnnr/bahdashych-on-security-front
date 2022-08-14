import React from 'react';
import MainLayout from "../../layouts/main.layout";
import { IPost } from "../../interfaces/post.interface";

const Slug = () => {
  const [post, setPost] = React.useState<IPost | undefined>({ title: '', slug: '', content: '' })
  return (
    <MainLayout>
      <></>
    </MainLayout>
  );
};

export default Slug;
