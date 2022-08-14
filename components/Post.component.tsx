import React from "react";
import { IPostPreview } from "../interfaces/post-preview.interface";
import { useRouter } from "next/router";

const Post: React.FC<IPostPreview> =
  React.forwardRef(({ title, slug, description }: IPostPreview, ref) => {
    const router = useRouter()

    const redirectToPost = (slug: string) => {
      return router.push(`post/${slug}`);
    }

    return (
      <div
        className={'border-solid border-2 border-indigo-700 p-4 w-1/2 m-2 rounded-2xl hover:scale-105 cursor-pointer transition'}
        onClick={() => redirectToPost(slug)}
      >
        <p className={'text-xl font-extrabold'}>{title}</p>
        <p>{description}</p>
      </div>
    );
});


Post.displayName = "Post";

export default Post;
