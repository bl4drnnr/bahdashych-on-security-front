import React from "react";
import { ApiClient } from "../../api.api-client";
import { LogoutPayload, LogoutResponse } from "@services/user/logout/logout.interface";
import { handleApiException } from "@exceptions/api/handleApiException";

export const useLogoutService = () => {
  const [loading, setLoading] = React.useState(false);

  const logout = async (payload: LogoutPayload)
    : Promise<LogoutResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post<LogoutResponse>('/user/logout', {}, {
        headers: { 'Authorization': `Bearer ${payload.accessToken}` }
      })

      return data
    } catch (error: any) {
      handleApiException(error)
    } finally {
      setLoading(false)
    }
  }

  return { logout, loading };
}
