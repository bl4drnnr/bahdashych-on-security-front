import { useState } from "react";
import { ApiClient } from "../api.api-client";
import { ISignUp } from "../../interface/signUp.interface";

export const useSignUpService = () => {
  try {
    const [loading, setLoading] = useState(false);

    const signUp = async (signUpPayload: ISignUp) => {
      setLoading(true);
      try {
        const { data } = await ApiClient.post(`/user/sign-up`, signUpPayload);
        return data
      } catch (error: any) {
        throw error?.response?.data
      } finally {
        setLoading(false)
      }
    }

    return { signUp, loading };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
