import { ApiClient } from "../../api.api-client";
import React from "react";
import { handleApiException } from "@exceptions/api/handleApiException";
import { GetPostByQueryPayload, GetPostByQueryResponse } from "@services/post/find/getPostByQuery.interface";

export const useGetPostByQueryService = () => {
  const [loading, setLoading] = React.useState(false);

  const getPostByQuery = async (payload: GetPostByQueryPayload)
    : Promise<GetPostByQueryResponse> => {
    try {
      setLoading(true)
      const { data } = await ApiClient.get<GetPostByQueryResponse>(`/post/one/${payload.query}`)

      return data
    } catch (error) {
      handleApiException(error)
    } finally {
      setLoading(false)
    }
  }

  return { getPostByQuery, loading };
}
