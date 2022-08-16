import { ApiClient } from "../api.api-client";
import { IPost } from "../../models/post.interface";

export const useCreatePostService = () => {
  try {
    const createPost = async (post: IPost, accessToken: string | null) => {
      const { data } = await ApiClient.post<IPost>('/post/create', post, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      })

      return data
    }

    return { createPost };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
