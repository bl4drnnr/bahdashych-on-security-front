import React from "react";
import { ApiClient } from "../api.api-client";
import { IError } from "../../interfaces/error.interface";
import { IBan } from "../../interfaces/ban.interface";

export const useBanService = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<IError>({ message: [] });

  const banUser = async (banUser: IBan) => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post<IBan>('/user/ban', banUser)
      setError({ message: [] })
      return data
    } catch (error: any) {
      setError(error?.response?.message || error?.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return { banUser, loading, error };
}
