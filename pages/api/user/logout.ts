import { NextApiRequest, NextApiResponse } from "next";
import { AxiosError } from "axios";
import { api } from "@api/index";
import { serialize } from 'cookie';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { data, headers } = await api.post('/user/logout', {}, {
      headers: { 'Authorization': `${req.headers.authorization}` }
    })

    if (headers['set-cookie']) {
      res.setHeader('Set-Cookie', serialize(
        '_rt', '', {
          path: '/',
          httpOnly: true,
          maxAge: -1
        }
      ))
    }

    return res.json(data)
  } catch (error) {
    return res
      .status((error as AxiosError).response?.status as number)
      .json((error as AxiosError).response?.data);
  }
}
