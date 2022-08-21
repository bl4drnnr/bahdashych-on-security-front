import { ApiClient } from "../api.api-client";
import { IPosts } from "../../interface/posts.interface";

export const useGetPostByQueryService = () => {
  try {
    const getPostByQuery = async (query: string) => {
      const { data } = await ApiClient.get<IPosts>(`/post/one/${query}`)

      return data
    }

    return { getPostByQuery }
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
