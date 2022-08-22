import React from "react";
import { ApiClient } from "../../api.api-client";
import { SignUpPayload, SignUpResponse } from "@services/user/sign-up/signUp.interface";
import { handleApiException } from "@exceptions/api/handleApiException";

export const useSignUpService = () => {
  const [loading, setLoading] = React.useState(false);

  const signUp = async (payload: SignUpPayload)
    : Promise<SignUpResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post<SignUpResponse>('/user/sign-up', payload);

      return data
    } catch (error) {
      handleApiException(error);
    } finally {
      setLoading(false)
    }
  }

  return { signUp, loading };
}
