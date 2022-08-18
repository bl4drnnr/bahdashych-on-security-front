import { ApiClient } from "../api.api-client";

export const useGetUsersByNicknameService = () => {

  const getUsersByNickname = async (
    searchQuery: string,
    accessToken: string | null
  ) => {
    const { data } = await ApiClient.get(`/user/one/${searchQuery}`, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    })

    return data
  }

  return { getUsersByNickname }
}
