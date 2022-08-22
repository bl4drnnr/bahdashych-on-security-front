import { ApiClient } from "../../api.api-client";
import React from "react";
import { handleApiException } from "@exceptions/api/handleApiException";
import { CommentPostPayload } from "@services/post/comment/commentPost.interface";

export const useCommentPostService = () => {
  const [loading, setLoading] = React.useState(false)

  const commentPost = async (payload: CommentPostPayload) => {
    try {
      const { data } = await ApiClient.post('/post/comment', payload.comment, {
        headers: { 'Authorization': `Bearer ${payload.accessToken}` }
      })

      return data
    } catch (error) {
      handleApiException(error)
    } finally {
      setLoading(false)
    }
  }

  return { commentPost, loading }
}
