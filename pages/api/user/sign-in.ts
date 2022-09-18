import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosError } from 'axios';
import { api } from "@api/index";
import { serialize } from 'cookie';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { data, headers } = await api.post('/user/sign-in', req.body)

    if (headers['set-cookie']) {
      const refreshToken = headers['set-cookie'][0].split('=')[1];
      res.setHeader('Set-Cookie', serialize(
        '_rt', refreshToken, {
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
