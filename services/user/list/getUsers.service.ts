import { ApiClient } from "../../api.api-client";
import React from "react";
import { handleApiException } from "@exceptions/api/handleApiException";
import { GetUsersPayload, GetUsersResponse } from "@services/user/list/getUsers.interface";

export const useGetUsersService = () => {
  const [loading, setLoading] = React.useState(false);

  const getUsers = async (payload: GetUsersPayload)
    : Promise<GetUsersResponse> => {
    try {
      setLoading(true)
      const { data } = await ApiClient.get<GetUsersResponse>(
        `/user/list/${payload.offset}/${payload.limit}`, {
        headers: { 'Authorization': `Bearer ${payload.accessToken}` }
      })

      return data
    } catch (error) {
      handleApiException(error)
    } finally {
      setLoading(false)
    }
  }

  return { getUsers, loading };
}
