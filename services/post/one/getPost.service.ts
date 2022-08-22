import { ApiClient } from "../../api.api-client";
import { GetPostPayload, GetPostResponse } from "@services/post/one/getPost.interface";
import React from "react";
import { handleApiException } from "@exceptions/api/handleApiException";

export const useGetPostService = () => {
  const [loading, setLoading] = React.useState(false);

  const getPost = async (payload: GetPostPayload)
    : Promise<GetPostResponse> => {
    try {
      setLoading(true)
      const { data } = await ApiClient.get<GetPostResponse>(`/post/${payload.slug}`);

      return data
    } catch (error) {
      handleApiException(error)
    } finally {
      setLoading(false)
    }
  }

  return { getPost, loading };
}
