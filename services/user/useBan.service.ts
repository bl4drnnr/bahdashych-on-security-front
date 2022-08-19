import { ApiClient } from "../api.api-client";
import { IBan } from "../../models/request/ban.interface";

export const useBanService = () => {

  const banUser = async (
    banUser: IBan,
    accessToken: string | null
  ) => {
    const { data } = await ApiClient.post<IBan>('/user/ban', banUser, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    })

    return data
  }

  return { banUser };
}
