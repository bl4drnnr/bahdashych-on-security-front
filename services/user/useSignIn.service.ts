import React from "react";
import { ApiClient } from "../api.api-client";
import { ISignIn } from "../../interfaces/sign-in.interface";
import { IError } from "../../interfaces/error.interface";

export const useSignInService = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<IError>({ message: [], statusCode: 0 });

  const signIn = async (signInPayload: ISignIn) => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post<string>('/api/user/sign-in', signInPayload);
      setError({ message: [], statusCode: 0 })
      return data
    } catch (error: any) {
      setError(error?.response?.message || error?.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return { signIn, loading, error, setError };
}
