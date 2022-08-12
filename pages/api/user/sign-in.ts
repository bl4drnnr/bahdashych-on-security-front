import { NextApiRequest, NextApiResponse } from "next";
import { AxiosError } from "axios";
import { api } from "../../../api";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { data, headers } = await api.post('/user/sign-in', req.body)

    if (headers["set-cookie"]) {
      res.setHeader("Set-Cookie", headers["set-cookie"]);
    }

    return res.json(data)
  } catch (error) {
    return res
      .status((error as AxiosError).response?.status as number)
      .json((error as AxiosError).response?.data);
  }
}
