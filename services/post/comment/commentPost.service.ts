import { ApiClient } from "../../api.api-client";
import { CommentDto } from "../../../dto/comment.dto";

export const useCommentPostService = () => {
  try {
    const commentPost = async (comment: CommentDto, accessToken: string | null) => {
      const { data } = await ApiClient.post('/post/comment', comment, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      })
      return data
    }

    return { commentPost };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
