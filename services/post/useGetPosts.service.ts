import { ApiClient } from "../api.api-client";
import { IPosts } from "../../models/response/posts.interface";

export const useGetPostsService = () => {
  try {
    const getPosts = async (
      { offset, limit } :
      { offset: number, limit: number }
    ) => {
      const { data } = await ApiClient.get<IPosts>(`/post/list/${offset}/${limit}`)
      return data;
    }

    return { getPosts };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
