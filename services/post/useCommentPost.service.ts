import { ApiClient } from "../api.api-client";
import { IComment } from "../../interfaces/comment.interface";

export const useCommentPostService = () => {
  try {
    const commentPost = async (comment: IComment, accessToken: string | null) => {
      const { data } = await ApiClient.post<IComment>('/post/comment', comment, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      })
      return data
    }

    return { commentPost };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
