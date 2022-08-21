import { IPost } from "./post.interface";

interface ILeavedComment {
  comment: string;
  'user.email': string;
}

export interface IFullPost {
  post: IPost
  postComments: ILeavedComment[]
}
