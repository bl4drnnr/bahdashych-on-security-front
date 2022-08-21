import React from "react";
import { ApiClient } from "../api.api-client";
import { IError } from "../../interface/error.interface";

export const useLogoutService = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<IError>({ message: [] });

  const logout = async (accessToken: string | null) => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post<number>('/user/logout', {}, {
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

  return { logout, logoutLoading: loading, error };
}
