import { ApiClient } from "../api.api-client";
import { IUser } from "../../models/user.interface";

export const useGetUsersService = () => {
  const getUsers = async (
    { offset, limit }:
    { offset: number, limit: number }
  ) => {
    const { data } = await ApiClient.get<IUser[]>(`/user/list/${offset}/${limit}`)
    return data
  }

  return { getUsers };
}
