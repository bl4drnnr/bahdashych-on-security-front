import { NextApiRequest, NextApiResponse } from "next";
import { AxiosError } from "axios";
import { api } from "@api/index";
import { serialize } from "cookie";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { data, headers } = await api.get('/auth/refresh', {
      headers: { 'Cookie': req.headers.cookie || '' },
    })

    if (headers['set-cookie']) {
      res.setHeader('Set-Cookie', serialize(
        '_rt',
        headers['set-cookie'][0].split('=')[1],
        {
          path: '/',
          httpOnly: true,
          maxAge: 7 * 24 * 60 * 60 * 1000
        })
      );
    }

    return res.json(data)
  } catch (error) {
    return res
      .status((error as AxiosError).response?.status as number)
      .json((error as AxiosError).response?.data);
  }
}
