import React from "react";
import { IUsers } from "../../../models/response/users.interface";

const GetUsers = ({ banUser, rows }: IUsers) => {
  return (
    <div>
      {rows ? (
        <>
          {rows.map(user => (
            <div key={user.id}>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default GetUsers;
