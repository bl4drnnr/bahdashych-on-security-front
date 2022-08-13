import { useState } from "react";
import { ApiClient } from "../api.api-client";
import { ISignIn } from "../../interfaces/signIn.interface";
import { IError } from "../../interfaces/error.interface";

export const useSignInService = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IError>({ message: [], statusCode: 0 });

  const signIn = async (signInPayload: ISignIn) => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post('/user/sign-in', signInPayload);
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
