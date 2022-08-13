import React from "react";
import { ApiClient } from "../api.api-client";
import { IError } from "../../interfaces/error.interface";

export const useGetPostsService = () => {
  try {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<IError>({ message: [], statusCode: 0 });

    const getPosts = async (
      { offset, limit, from, to } :
      { offset: number, limit: number, from: string, to: string }
    ) => {
      try {
        const { data } = await ApiClient.get(`/post/list/${offset}/${limit}/${from}/${to}`)
        return data
      } catch (error: any) {
        setError(error?.response?.message || error?.response?.data)
      } finally {
        setLoading(false);
      }
    }

    return { getPosts, loading, error };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
