import { NextApiRequest, NextApiResponse } from "next";
import { AxiosError } from "axios";
import { api } from "../../../api";
import { serialize } from 'cookie';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { data } = await api.post('/user/sign-in', req.body)

    res.setHeader('Set-Cookie', serialize(
      '_rt',
      data._rt,
      { path: '/', httpOnly: true })
    );
    delete data._rt

    return res.json(data)
  } catch (error) {
    return res
      .status((error as AxiosError).response?.status as number)
      .json((error as AxiosError).response?.data);
  }
}
