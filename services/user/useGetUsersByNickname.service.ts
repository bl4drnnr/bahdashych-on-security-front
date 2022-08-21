import { ApiClient } from "../api.api-client";
import { IUsers } from "../../interface/users.interface";

export const useGetUsersByNicknameService = () => {

  const getUsersByNickname = async (
    searchQuery: string,
    accessToken: string | null
  ) => {
    const { data } = await ApiClient.get<IUsers>(`/user/one/${searchQuery}`, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    })

    return data
  }

  return { getUsersByNickname }
}
