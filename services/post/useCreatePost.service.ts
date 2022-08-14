import { ApiClient } from "../api.api-client";
import { IPostPreview } from "../../interfaces/post-preview.interface";

export const useCreatePostService = () => {
  try {
    const createPost = async (post: IPostPreview) => {
      const { data } = await ApiClient.post<IPostPreview>('/post/create', post)
      return data
    }

    return { createPost };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
