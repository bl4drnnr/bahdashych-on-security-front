import React from "react";
import { ApiClient } from "../api.api-client";
import { SignInDto } from "../../dto/sign-in.dto";
import { IError } from "../../interface/error.interface";

export const useSignInService = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<IError>({ message: [] });

  const signIn = async (signInPayload: SignInDto) => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post<string>('/user/sign-in', signInPayload);
      setError({ message: [] })
      return data
    } catch (error: any) {
      setError(error?.response?.message || error?.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return { signIn, loading, error, setError };
}
