import { IPost } from "./post.interface";

interface ILeavedComment {
  readonly comment: string;
  readonly user: {
    email: string;
  }
}

export interface IFullPost {
  post: IPost
  postComments: ILeavedComment[]
}
