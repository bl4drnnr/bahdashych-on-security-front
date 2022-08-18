import { NextApiRequest, NextApiResponse } from "next";
import { AxiosError } from "axios";
import { api } from "../../../api";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { data } = await api.post('/user/ban', req.body, {
      headers: { 'Authorization': `${req.headers.authorization}` }
    })

    return res.json(data)
  } catch (error) {
    return res
      .status((error as AxiosError).response?.status as number)
      .json((error as AxiosError).response?.data);
  }
}
