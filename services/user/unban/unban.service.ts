import { ApiClient } from "../../api.api-client";
import React from "react";

export const useUnbanService = () => {
  const [loading, setLoading] = React.useState(false);

  const unbanUser = async (
    email: string,
    accessToken: string | null
  ) => {
    const { data } = await ApiClient.post<string>('/user/unban', { email }, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    })

    return data
  }

  return { unbanUser };
}
