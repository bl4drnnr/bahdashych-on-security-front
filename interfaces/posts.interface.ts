import { IPostPreview } from "./post-preview.interface";

export interface IPosts {
  count: number;
  rows: IPostPreview[];
}
