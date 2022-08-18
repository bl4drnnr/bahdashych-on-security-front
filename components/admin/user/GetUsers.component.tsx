import React from "react";
import { IUsers } from "../../../models/response/users.interface";

const GetUsers = ({ banUser, rows }: IUsers) => {
  return (
    <div>
      {rows.map(user => (
        <>

        </>
      ))}
    </div>
  );
};

export default GetUsers;
