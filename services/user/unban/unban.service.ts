import { ApiClient } from "../../api.api-client";
import React from "react";
import { UnbanUserPayload, UnbanUserResponse } from "./unban.interface";
import { handleApiException } from "@exceptions/api/handleApiException";

export const useUnbanService = () => {
  const [loading, setLoading] = React.useState(false);

  const unbanUser = async (payload: UnbanUserPayload)
    :Promise<UnbanUserResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post<UnbanUserResponse>('/user/unban',
        { email: payload.email },
        {
        headers: { 'Authorization': `Bearer ${payload.accessToken}` }
      })

      return data
    } catch (error) {
      handleApiException(error);
    } finally {
      setLoading(false);
    }
  }

  return { unbanUser, loading };
}
