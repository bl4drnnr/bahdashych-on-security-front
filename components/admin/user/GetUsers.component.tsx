import React from "react";
import { IUsers } from "../../../models/response/users.interface";
import UserList from "./UserList.component";

interface IGetUsers {
  users: IUsers;
  banUser: (userId: string) => Promise<void>;
}

const GetUsers = ({ users, banUser }: IGetUsers) => {
  return (
    <>
      <UserList
        rows={users.rows}
        count={users.count}
        banUser={banUser}
      />
    </>
  );
};

export default GetUsers;
