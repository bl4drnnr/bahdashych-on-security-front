import { ApiClient } from "../../api.api-client";
import React from "react";
import { handleApiException } from "@exceptions/api/handleApiException";
import { GetUsersByNicknamePayload, GetUsersByNicknameResponse } from "@services/user/one/getUsersByNickname.interface";

export const useGetUsersByNicknameService = () => {
  const [loading, setLoading] = React.useState(false);

  const getUsersByNickname = async (payload: GetUsersByNicknamePayload)
    : Promise<GetUsersByNicknameResponse> => {
    try {
      setLoading(true)
      const { data } = await ApiClient.get<GetUsersByNicknameResponse>(
        `/user/one/${payload.searchQuery}`, {
        headers: { 'Authorization': `Bearer ${payload.accessToken}` }
      })

      return data
    } catch (error) {
      handleApiException(error)
    } finally {
      setLoading(false)
    }
  }

  return { getUsersByNickname, loading }
}
