import { ApiClient } from "../../api.api-client";
import React from "react";
import { handleApiException } from "@exceptions/api/handleApiException";
import { CreatePostPayload, CreatePostResponse } from "@services/post/create/createPost.interface";

export const useCreatePostService = () => {
  const [loading, setLoading] = React.useState(false)

  const createPost = async (payload: CreatePostPayload)
    : Promise<CreatePostResponse> => {
    try {
      setLoading(true)
      const { data } = await ApiClient.post<CreatePostResponse>('/post/create', payload.post, {
        headers: { 'Authorization': `Bearer ${payload.accessToken}` }
      })

      return data
    } catch (error) {
      handleApiException(error)
    } finally {
      setLoading(false)
    }
  }

  return { createPost, loading };
}
