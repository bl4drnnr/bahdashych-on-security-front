import { ApiClient } from "../api.api-client";
import { IComment } from "../../interfaces/comment.interface";

export const useCommentPostService = () => {
  try {
    const commentPost = async (comment: IComment) => {
      const { data } = await ApiClient.post<IComment>('/post/comment', comment)
      return data
    }

    return { commentPost };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
