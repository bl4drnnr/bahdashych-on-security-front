import React from "react";
import { ApiClient } from "../api.api-client";
import { ISignUp } from "../../models/request/sign-up.interface";
import { IError } from "../../models/response/error.interface";
import { IUser } from "../../models/user.interface";

export const useSignUpService = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<IError>({ message: [] });

  const signUp = async (signUpPayload: ISignUp) => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post<IUser>('/user/sign-up', signUpPayload);
      setError({ message: [] })
      return data
    } catch (error: any) {
      setError(error?.response?.message || error?.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return { signUp, loading, error, setError };
}
