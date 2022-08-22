interface Post {
  description: string;
  title: string;
  content: string;
}

export interface CreatePostResponse {
  postId: string
}

export interface CreatePostPayload {
  post: Post,
  accessToken: string | null
}
