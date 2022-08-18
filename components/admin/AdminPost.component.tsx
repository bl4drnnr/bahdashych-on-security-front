import React from "react";
import { useCreatePostService } from "../../services/post/useCreatePost.service";
import { useGetPostsService } from "../../services/post/useGetPosts.service";
import { useDeletePostService } from "../../services/post/useDeletePost.service";
import { IPosts } from "../../models/response/posts.interface";
import CreatePost from "./post/CreatePost.component";
import GetPosts from "./post/GetPosts.component";
import { IPost } from "../../models/post.interface";

const AdminPost = () => {
  const [posts, setPosts] = React.useState<IPosts>({ count: 0, rows: [] });

  const { getPosts } = useGetPostsService()
  const { createPost } = useCreatePostService()
  const { deletePost } = useDeletePostService()

  const fetchPosts = async (offset: number, limit: number) => {
    const listOfPosts = await getPosts({ offset, limit })
    setPosts(listOfPosts)
  }

  const post = async (post: IPost) => {
    await createPost(post, sessionStorage.getItem('_at'))
    await fetchPosts(0, 10).then()
  }

  const removePost = async (postId: string) => {
    await deletePost(postId, sessionStorage.getItem('_at'))
    await fetchPosts(0, 10).then()
  }

  React.useEffect(() => {
    fetchPosts(0, 10).then()
  }, [])

  return (
    <>
      <CreatePost createPost={post} />
      <GetPosts
        removePost={removePost}
        posts={posts}
        fetchPosts={fetchPosts}
      />
    </>
  );
};

export default AdminPost;
