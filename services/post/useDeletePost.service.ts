import React from "react";
import { ApiClient } from "../api.api-client";
import { IError } from "../../interfaces/error.interface";

export const useDeletePostService = () => {
  try {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<IError>({ message: '', statusCode: 0 });

    const deletePost = async (id: string) => {
      setLoading(true);
      try {
        const { data } = await ApiClient.get(`/post/delete/${id}`)
        return data
      } catch (error: any) {
        setError(error?.response?.data)
      } finally {
        setLoading(false)
      }
    }

    return { deletePost, loading, error };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
