import React from "react";
import { ApiClient } from "../../api.api-client";
import { handleApiException } from "@exceptions/api/handleApiException";
import { SignInPayload, SignInResponse } from "@services/user/sign-in/signIn.interface";

export const useSignInService = () => {
  const [loading, setLoading] = React.useState(false);

  const signIn = async (payload: SignInPayload)
    :Promise<SignInResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post<SignInResponse>('/user/sign-in', payload);

      return data
    } catch (error) {
      handleApiException(error)
    } finally {
      setLoading(false)
    }
  }

  return { signIn, loading };
}
