import { ApiClient } from "../api.api-client";
import { IFullPost } from "../../interfaces/full-post.interface";

export const useGetPostService = () => {
  try {
    const getPost = async (slug: string) => {
      const { data } = await ApiClient.get<IFullPost>(`/post/${slug}`);
      return data
    }

    return { getPost };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
