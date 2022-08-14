import React from "react";
import { ApiClient } from "../api.api-client";
import { IError } from "../../interfaces/error.interface";
import { IPostPreview } from "../../interfaces/post-preview.interface";

export const useCreatePostService = () => {
  try {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<IError>({ message: [], statusCode: 0 });

    const createPost = async (post: IPostPreview) => {
      setLoading(true);
      try {
        const { data } = await ApiClient.post<IPostPreview>('/post/create', post)
        return data
      } catch (error: any) {
        setError(error?.response?.message || error?.response?.data)
      } finally {
        setLoading(false);
      }
    }

    return { createPost, loading, error };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
