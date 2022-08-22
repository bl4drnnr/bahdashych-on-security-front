interface IPostPreview {
  id: string;
  title: string;
  slug: string;
  description: string;
}

export interface GetPostsResponse {
  count: number;
  rows: IPostPreview[];
}

export interface GetPostsPayload {
  offset: number;
  limit: number;
}
