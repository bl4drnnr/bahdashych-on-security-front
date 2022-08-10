import { useState } from "react";
import { ApiClient } from "../api.api-client";
import { IError } from "../../interfaces/error.interface";

export const useLogoutService = () => {
  try {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<IError>({ message: '', statusCode: 0 });

    const logout = async () => {
      try {
        const { data } = await ApiClient.post('/user/logout')
      } catch (error: any) {
        setError(error?.response?.data)
      } finally {
        setLoading(false)
      }
    }

    return { logout, loading, error };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
