interface Comment {
  postId: string
  comment: string
}

export interface CommentPostPayload {
  comment: Comment
  accessToken: string | null
}
