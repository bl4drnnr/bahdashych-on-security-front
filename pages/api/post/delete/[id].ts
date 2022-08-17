import { NextApiRequest, NextApiResponse } from "next";
import { AxiosError } from "axios";
import { api } from "../../../../api";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { data } = await api.delete(`/post/${req.query.id}`, {
      headers: { 'Authorization': `Bearer ${req.headers.authorization}` }
    })

    return res.json(data)
  } catch (error) {
    return res
      .status((error as AxiosError).response?.status as number)
      .json((error as AxiosError).response?.data);
  }
}
