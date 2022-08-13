import React from "react";
import { ApiClient } from "../api.api-client";
import { ISignUp } from "../../interfaces/signUp.interface";
import { IError } from "../../interfaces/error.interface";

export const useSignUpService = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<IError>({ message: [], statusCode: 0 });

  const signUp = async (signUpPayload: ISignUp) => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post('/user/sign-up', signUpPayload);
      setError({ message: [], statusCode: 0 })
      return data
    } catch (error: any) {
      setError(error?.response?.message || error?.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return { signUp, loading, error, setError };
}
