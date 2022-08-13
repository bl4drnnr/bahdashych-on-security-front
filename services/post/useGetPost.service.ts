import React from "react";
import { ApiClient } from "../api.api-client";
import { IError } from "../../interfaces/error.interface";

export const useGetPostService = () => {
  try {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<IError>({ message: [], statusCode: 0 });

    const getPost = async (slug: string) => {
      setLoading(true);
      try {
        const { data } = await ApiClient.get(`/post/${slug}`);
        return data
      } catch (error: any) {
        setError(error?.response?.message || error?.response?.data)
      } finally {
        setLoading(false);
      }
    }

    return { getPost, loading, error };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
