import { ApiClient } from "../api.api-client";

export const useUnbanService = () => {

  const unbanUser = async (
    email: string,
    accessToken: string | null
  ) => {
    const { data } = await ApiClient.post('/user/unban', { email }, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    })

    return data
  }

  return { unbanUser };
}
