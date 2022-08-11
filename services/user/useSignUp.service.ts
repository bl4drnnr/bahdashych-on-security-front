import React from "react";
import { ApiClient } from "../api.api-client";
import { ISignUp } from "../../interfaces/signUp.interface";
import { IError } from "../../interfaces/error.interface";

export const useSignUpService = () => {
  try {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<IError>({ message: '', statusCode: 0 });

    const signUp = async (signUpPayload: ISignUp) => {
      setLoading(true);
      try {
        const { data } = await ApiClient.post('/user/sign-up', signUpPayload);
        return data
      } catch (error: any) {
        setError(error?.response?.data)
      } finally {
        setLoading(false)
      }
    }

    const splitMessage = error.message.split('-').join(' ')
    error.message = splitMessage.charAt(0).toUpperCase() + splitMessage.slice(1)

    return { signUp, loading, error, setError };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
