import { useState } from "react";
import { ApiClient } from "../api.api-client";
import { IForgotPassword } from "../../interface/forgotPassword.interface";

export const useForgotPasswordService = () => {
  try {
    const [loading, setLoading] = useState(false);

    const forgotPassword = async (forgotPassword: IForgotPassword) => {
      setLoading(true);
      try {
        const { data } = await ApiClient.post(`/user/forgot-password`, forgotPassword);
        return data
      } catch (error: any) {
        throw error?.response?.data
      } finally {
        setLoading(false)
      }
    }

    return { forgotPassword, loading };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
