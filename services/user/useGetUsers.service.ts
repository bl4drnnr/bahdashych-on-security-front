import { useState } from "react";
import { ApiClient } from "../api.api-client";
import { IError } from "../../interfaces/error.interface";

export const useGetUsersService = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IError>({ message: [], statusCode: 0 });

  const getUsers = async () => {
    try {
      const { data } = await ApiClient.get('/user/list')
      return data
    } catch (error: any) {
      setError(error?.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return { getUsers, loading, error };
}
