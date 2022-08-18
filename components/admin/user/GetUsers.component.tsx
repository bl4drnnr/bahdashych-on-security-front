import React from "react";
import { IUsers } from "../../../models/response/users.interface";
import BasicButton from "../../ui/BasicButton.component";

const GetUsers = ({ banUser, rows }: IUsers) => {
  return (
    <div>
      {rows ? (
        <div className={'w-full flex'}>
          <div className={'m-auto w-full w-2/4'}>
            {rows.map(user => (
              <div key={user.id}>
                <div className={'flex justify-between border-solid border p-4 m-2 rounded cursor-pointer'}>
                  <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    {user.firstName ? (<p>First name: {user.firstName}</p>) : null}
                    {user.firstName ? (<p>Last name: {user.lastName}</p>) : null}
                  </div>
                  <BasicButton
                    className={'w-16 bg-red-600 hover:bg-red-800 h-9'}
                    onClick={async () => banUser ? banUser(user.id) : {}}
                  >
                    Ban
                  </BasicButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GetUsers;
