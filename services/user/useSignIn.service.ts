import { useState } from "react";
import { ApiClient } from "../api.api-client";
import { ISignIn } from "../../interfaces/signIn.interface";
import { IError } from "../../interfaces/error.interface";

export const useSignInService = () => {
  try {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<IError>({ message: '', statusCode: 0 });

    const signIn = async (signInPayload: ISignIn) => {
      try {
        setLoading(true);
        const { data } = await ApiClient.post('/user/sign-in', signInPayload);
        return data
      } catch (error: any) {
        setError(error?.response?.data)
      } finally {
        setLoading(false)
      }
    }

    return { signIn, loading, error, setError };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
