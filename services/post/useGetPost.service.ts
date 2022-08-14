import { ApiClient } from "../api.api-client";
import { IPost } from "../../interfaces/post.interface";

export const useGetPostService = () => {
  try {
    const getPost = async (slug: string) => {
      const { data } = await ApiClient.get<IPost>(`/post/${slug}`);
      return data
    }

    return { getPost };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
