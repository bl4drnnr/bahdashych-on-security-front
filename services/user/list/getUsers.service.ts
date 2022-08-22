import { ApiClient } from "../../api.api-client";
import { IUsers } from "../../../interface/users.interface";

export const useGetUsersService = () => {

  const getUsers = async (
    { offset, limit }:
    { offset: number, limit: number },
    accessToken: string | null
  ) => {
    const { data } = await ApiClient.get<IUsers>(`/user/list/${offset}/${limit}`, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    })

    return data
  }

  return { getUsers };
}
