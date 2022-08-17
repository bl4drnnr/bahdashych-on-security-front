import { IPostPreview } from "./post-preview.interface";
import { IPost } from "../post.interface";

export interface IPosts {
  count: number;
  rows: IPostPreview[];
  removePost?: (post: IPost) => Promise<any>
}
