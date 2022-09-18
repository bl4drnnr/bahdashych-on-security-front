import { NextApiRequest, NextApiResponse } from "next";
import { AxiosError } from "axios";
import { api } from "@api/index";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { data } = await api.get('/post/one', {
      params: { post: req.query.searchQuery }
    })

    return res.json(data)
  } catch (error) {
    return res
      .status((error as AxiosError).response?.status as number)
      .json((error as AxiosError).response?.data);
  }
}
