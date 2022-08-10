import { useState } from "react";
import { ApiClient } from "../../api.api-client";
import { ISignIn } from "../../../interface/signIn.interface";

export const useSignInService = () => {
  try {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    return { signIn, loading, error };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
