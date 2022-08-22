import React from "react";
import { ApiClient } from "../../api.api-client";
import { handleApiException } from "@exceptions/api/handleApiException";
import { RefreshTokenResponse } from "@services/auth/refresh/refreshToken.interface";

export const useRefreshTokenService = () => {
  const [loading, setLoading] = React.useState(false);

  const refreshToken = async ()
    : Promise<RefreshTokenResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.get<RefreshTokenResponse>('/auth/refresh-token');

      return data
    } catch (error) {
      handleApiException(error)
    } finally {
      setLoading(false)
    }
  }

  return { refreshToken, loading }
}
