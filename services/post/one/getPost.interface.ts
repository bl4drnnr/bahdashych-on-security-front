interface IPost {
  id: string;
  slug: string;
  description: string;
  title: string;
  content: string;
}

interface IComment {
  comment: string;
  'user.email': string;
}

export interface GetPostResponse {
  post: IPost
  postComments: IComment[]
}

export interface GetPostPayload {
  slug: string
}
