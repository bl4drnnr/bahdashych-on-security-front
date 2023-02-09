import React from 'react';

import { Api } from '@api';
import { ExceptionHandler } from '@exception-handler';

import { GetPostPayload, GetPostResponse } from './get-post.interface';

export const useGetPostService = () => {
  const [loading, setLoading] = React.useState(false);

  const getPost = async ({ slug }: GetPostPayload)
    : Promise<GetPostResponse> => {
    try {
      setLoading(true);
      const { data } = await Api.get<GetPostResponse>(`/post/${slug}`);

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { getPost, loading };
};
