import React from "react";
import { ApiClient } from "../api.api-client";
import { IError } from "../../models/response/error.interface";
import { IBan } from "../../models/request/ban.interface";

export const useBanService = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<IError>({ message: [] });

  const banUser = async (
    banUser: IBan,
    accessToken: string | null
  ) => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post<IBan>('/user/ban', banUser, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      })
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
