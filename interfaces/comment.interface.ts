export interface IComment {
  readonly postId: string;
  readonly comment: string;
}

export interface ILeavedComment {
  readonly comment: string;
  readonly user: {
    email: string;
  }
}
