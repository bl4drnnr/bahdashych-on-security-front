import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';

import { GetPostsPayload, GetPostsResponse } from './get-posts.interface';

export const useGetPostsService = () => {
  const [loading, setLoading] = React.useState(false);

  const getPosts = async ({ search, sort, page, limit } : GetPostsPayload)
    : Promise<GetPostsResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.get<GetPostsResponse>(`/posts/${page}/${limit}/${sort}/${search}`);

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { getPosts, loading };
};
