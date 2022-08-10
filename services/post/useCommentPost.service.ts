import React from "react";
import { ApiClient } from "../api.api-client";
import { IError } from "../../interfaces/error.interface";
import { IComment } from "../../interfaces/comment.interface";

export const useCommentPostService = () => {
  try {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<IError>({ message: '', statusCode: 0 });

    const commentPost = async (comment: IComment) => {
      setLoading(true);
      try {
        const { data } = await ApiClient.post('/post/comment', comment)
        return data
      } catch (error: any) {
        setError(error?.response?.data)
      } finally {
        setLoading(false);
      }
    }

    return { commentPost, loading, error };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
