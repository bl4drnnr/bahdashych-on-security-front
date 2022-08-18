import { IUser } from "../user.interface";

export interface IUsers {
  count: number;
  rows: IUser[];
  banUser?: (userId: string) => Promise<void>;
}
