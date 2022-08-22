interface IPostPreview {
  id: string;
  title: string;
  slug: string;
  description: string;
}

export interface GetPostByQueryResponse {
  count: number;
  rows: IPostPreview[];
}

export interface GetPostByQueryPayload {
  query: string
}
