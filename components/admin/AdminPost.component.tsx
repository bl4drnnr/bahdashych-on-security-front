import React from "react";
import { useCreatePostService } from "../../services/post/useCreatePost.service";
import { useGetPostsService } from "../../services/post/useGetPosts.service";
import { IPosts } from "../../models/response/posts.interface";
import CreatePost from "./post/CreatePost.component";
import GetPosts from "./post/GetPosts.component";
import { IPost } from "../../models/post.interface";

const AdminPost = () => {
  const [posts, setPosts] = React.useState<IPosts>({ count: 0, rows: [] });

  const { getPosts } = useGetPostsService()
  const { createPost } = useCreatePostService()

  const fetchPosts = async (offset: number, limit: number) => {
    const listOfPosts = await getPosts({ offset, limit })
    setPosts(listOfPosts)
  }

  const post = async (post: IPost) => {
    await createPost(post, sessionStorage.getItem('_at'))
  }

  React.useEffect(() => {
    fetchPosts(0, 10).then()
  })

  return (
    <>
      <CreatePost createPost={post} />
      <GetPosts
        posts={posts}
        fetchPosts={fetchPosts}
      />
    </>
  );
};

export default AdminPost;
