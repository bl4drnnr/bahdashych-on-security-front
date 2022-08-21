import { IUser } from "./user.interface";
import { BanDto } from "../dto/ban.dto";

export interface IUsers {
  count: number;
  rows: IUser[];
  banUser?: (userBan: BanDto) => Promise<void>;
  unbanUser?: (email: string) => Promise<void>;
}
