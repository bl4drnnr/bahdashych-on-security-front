import React from "react";
import { useCreatePostService } from "../../services/post/create/createPost.service";
import { useGetPostsService } from "../../services/post/list/getPosts.service";
import { useDeletePostService } from "../../services/post/delete/deletePost.service";
import { IPosts } from "../../interface/posts.interface";
import CreatePost from "./post/CreatePost.component";
import GetPosts from "./post/GetPosts.component";
import { PostDto } from "../../dto/post.dto";
import Loader from "../ui/Loader.component";

const AdminPost = () => {
  const [loading, setLoading] = React.useState(false)
  const [posts, setPosts] = React.useState<IPosts>({ count: 0, rows: [] });

  const { getPosts } = useGetPostsService()
  const { createPost } = useCreatePostService()
  const { deletePost } = useDeletePostService()

  const fetchPosts = async (offset: number, limit: number) => {
    setLoading(true)
    const listOfPosts = await getPosts({ offset, limit })
    setPosts(listOfPosts)
    setLoading(false)
  }

  const post = async (post: PostDto) => {
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
      {loading ? <Loader /> : null}
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
