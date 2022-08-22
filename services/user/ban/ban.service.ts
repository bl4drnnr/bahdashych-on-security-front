import { ApiClient } from "../../api.api-client";
import React from "react";
import { handleApiException } from "@exceptions/api/handleApiException";
import { BanPayload, BanResponse } from "@services/user/ban/ban.interface";

export const useBanService = () => {
  const [loading, setLoading] = React.useState(false);

  const banUser = async (payload: BanPayload)
    : Promise<BanResponse> => {
    try {
      setLoading(true)
      const { data } = await ApiClient.post<BanResponse>('/user/ban', {
        email: payload.email,
        reason: payload.reason
      }, {
        headers: { 'Authorization': `Bearer ${payload.accessToken}` }
      })

      return data
    } catch (error) {
      handleApiException(error)
    } finally {
      setLoading(false)
    }
  }

  return { banUser, loading };
}
