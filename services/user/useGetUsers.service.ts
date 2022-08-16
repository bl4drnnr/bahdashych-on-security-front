import React from "react";
import { ApiClient } from "../api.api-client";
import { IError } from "../../models/response/error.interface";
import { IUser } from "../../models/user.interface";

export const useGetUsersService = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<IError>({ message: [] });

  const getUsers = async (
    { offset, limit }:
    { offset: number, limit: number },
    accessToken: string | null
  ) => {
    try {
      setLoading(true);
      const { data } = await ApiClient.get<IUser[]>(`/user/list/${offset}/${limit}`, {
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

  return { getUsers, loading, error };
}
