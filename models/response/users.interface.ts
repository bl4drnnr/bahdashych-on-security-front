import { IUser } from "../user.interface";
import { IBan } from "../request/ban.interface";

export interface IUsers {
  count: number;
  rows: IUser[];
  banUser?: (userBan: IBan) => Promise<void>;
  unbanUser?: (email: string) => Promise<void>;
}
