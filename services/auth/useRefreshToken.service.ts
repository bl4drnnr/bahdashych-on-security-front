import React from "react";
import { ApiClient } from "../api.api-client";
import { IError } from "../../interface/error.interface";

export const useRefreshTokenService = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<IError>({ message: [] });

  const refreshToken = async () => {
    try {
      setLoading(true);
      const { data } = await ApiClient.get<string>('/auth/refresh-token');
      setError({ message: [] })
      return data
    } catch (error: any) {
      setError(error?.response?.message || error?.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return { refreshToken, loading, error }
}
