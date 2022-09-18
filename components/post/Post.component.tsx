import React from "react";
import { IPostPreview } from "../../interface/post-preview.interface";
import { useRouter } from "next/router";

const Post: React.FC<IPostPreview> =
  React.forwardRef(({ title, slug, description }: IPostPreview, ref) => {
    const router = useRouter()

    const redirectToPost = (slug: string) => {
      return router.push(`post/${slug}`);
    }

    return (
      <div
        onClick={() => redirectToPost(slug)}
      >
        <p>{title}</p>
        <p>{description}</p>
      </div>
    );
});


Post.displayName = "Post";

export default Post;
