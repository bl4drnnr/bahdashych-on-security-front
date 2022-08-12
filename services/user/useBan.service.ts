import { useState } from "react";
import { ApiClient } from "../api.api-client";
import { IError } from "../../interfaces/error.interface";
import { IBan } from "../../interfaces/ban.interface";

export const useBanService = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IError>({ message: [], statusCode: 0 });

  const banUser = async (banUser: IBan) => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post('/user/ban', banUser)
      return data
    } catch (error: any) {
      setError(error?.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return { banUser, loading, error };
}
