import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../../../../api";
import { AxiosError } from "axios";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { data } = await api.get(`/post/${req.query.offset}/${req.query.limit}`)

    return res.json(data);
  } catch (error) {
    return res
      .status((error as AxiosError).response?.status as number)
      .json((error as AxiosError).response?.data);
  }
}
