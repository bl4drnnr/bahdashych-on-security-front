import React from "react";
import { ApiClient } from "../api.api-client";
import { IError } from "../../interfaces/error.interface";
import { IUser } from "../../interfaces/user.interface";

export const useGetUsersService = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<IError>({ message: [], statusCode: 0 });

  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await ApiClient.get<IUser[]>('/user/list')
      setError({ message: [], statusCode: 0 })
      return data
    } catch (error: any) {
      setError(error?.response?.message || error?.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return { getUsers, loading, error };
}
