import { ApiClient } from "../api.api-client";
import { IPost } from "../../interfaces/post.interface";
import { ILeavedComment } from "../../interfaces/comment.interface";

export const useGetPostService = () => {
  try {
    const getPost = async (slug: string) => {
      const { data } = await ApiClient.get<{ post: IPost; postComments: ILeavedComment[]; }>(`/post/${slug}`);
      return data
    }

    return { getPost };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
