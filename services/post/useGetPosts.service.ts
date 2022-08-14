import { ApiClient } from "../api.api-client";
import { IPosts } from "../../interfaces/posts.interface";

export const useGetPostsService = () => {
  try {
    const getPosts = async (
      { offset, limit, from, to } :
      { offset: string, limit: string, from: string, to: string }
    ) => {
      const { data } = await ApiClient.get<IPosts>(`/post/list/${offset}/${limit}/${from}/${to}`)
      return data;
    }

    return { getPosts };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
