import React from "react";
import { ApiClient } from "../api.api-client";
import { IError } from "../../interfaces/error.interface";

export const useRefreshTokenService = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<IError>({ message: [], statusCode: 0 });

  const refreshToken = async () => {
    try {
      setLoading(true);
      const { data } = await ApiClient.get<string>('/api/auth/refresh-token');
      setError({ message: [], statusCode: 0 })
      return data
    } catch (error: any) {
      setError(error?.response?.message || error?.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return { refreshToken, loading, error }
}
