import { ApiClient } from "../../api.api-client";
import { PostDto } from "../../../dto/post.dto";

export const useCreatePostService = () => {
  try {
    const createPost = async (post: PostDto, accessToken: string | null) => {
      const { data } = await ApiClient.post('/post/create', post, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      })

      return data
    }

    return { createPost };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
