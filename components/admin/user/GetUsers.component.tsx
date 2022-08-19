import React from "react";
import { IUsers } from "../../../models/response/users.interface";
import UserList from "./UserList.component";
import { IBan } from "../../../models/request/ban.interface";

interface IGetUsers {
  users: IUsers;
  banUser: (userBan: IBan) => Promise<void>;
  unbanUser: (email: string) => Promise<void>;
}

const GetUsers = ({ users, banUser, unbanUser }: IGetUsers) => {
  return (
    <>
      <UserList
        rows={users.rows}
        count={users.count}
        banUser={banUser}
        unbanUser={unbanUser}
      />
    </>
  );
};

export default GetUsers;
