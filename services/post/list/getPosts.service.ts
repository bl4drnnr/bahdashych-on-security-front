import { ApiClient } from "../../api.api-client";
import React from "react";
import { handleApiException } from "@exceptions/api/handleApiException";
import { GetPostsPayload, GetPostsResponse } from "@services/post/list/getPosts.interface";

export const useGetPostsService = () => {
  const [loading, setLoading] = React.useState(false)

  const getPosts = async (payload: GetPostsPayload)
    : Promise<GetPostsResponse> => {
    try {
      setLoading(true)
      const { data } = await ApiClient.get<GetPostsResponse>(`/post/list/${payload.offset}/${payload.limit}`)

      return data;
    } catch (error) {
      handleApiException(error)
    } finally {
      setLoading(false)
    }
  }

  return { getPosts, loading };
}
