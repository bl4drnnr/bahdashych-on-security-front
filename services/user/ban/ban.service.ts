import { ApiClient } from "../../api.api-client";
import { BanDto } from "../../../dto/ban.dto";

export const useBanService = () => {

  const banUser = async (
    banUser: BanDto,
    accessToken: string | null
  ) => {
    const { data } = await ApiClient.post<string>('/user/ban', banUser, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    })

    return data
  }

  return { banUser };
}
