import React from "react";
import BasicButton from "../../ui/BasicButton.component";
import { IUsers } from "../../../models/response/users.interface";
import ModalWindow from "../../ui/ModalWindow.component";
import { IUser } from "../../../models/user.interface";

const UserList = ({ banUser, rows }: IUsers) => {
  const [showModal, setShowModal] = React.useState(false);
  const [userToBan, setUserToBan] = React.useState<IUser>({
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    username: ""
  })

  const provideReasonToBan = (user: IUser) => {
    setUserToBan(user)
    setShowModal(true)
  }

  const blockUser = () => {

  }

  return (
    <>
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
                    onClick={async () => provideReasonToBan(user)}
                  >
                    Ban
                  </BasicButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {showModal ? (
        <ModalWindow
          close={() => setShowModal(!showModal)}
          title={'You are about to ban user'}
          text={`You are about to ban user ${userToBan.email}. Please, provide the reason`}
          action={blockUser}
        />) : null}
    </>
  );
};

export default UserList;
