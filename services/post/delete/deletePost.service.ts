import { ApiClient } from "../../api.api-client";
import React from "react";
import { DeletePostPayload, DeletePostResponse } from "@services/post/delete/deletePost.interface";
import { handleApiException } from "@exceptions/api/handleApiException";

export const useDeletePostService = () => {
  const [loading, setLoading] = React.useState(false)

  const deletePost = async (payload: DeletePostPayload)
    : Promise<DeletePostResponse> => {
    try {
      setLoading(true)
      const { data } = await ApiClient.get<DeletePostResponse>(
        `/post/delete/${payload.id}`, {
        headers: { 'Authorization': `Bearer ${payload.accessToken}` }
      });

      return data;
    } catch (error) {
      handleApiException(error)
    } finally {
      setLoading(false)
    }
  }

  return { deletePost, loading }
}
