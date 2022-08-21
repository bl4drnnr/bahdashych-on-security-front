import React from "react";
import { IUsers } from "../../../interface/users.interface";
import BasicButton from "../../ui/BasicButton.component";
import ModalWindow from "../../ui/ModalWindow.component";

const GetUsers = ({ banUser, rows, unbanUser }: IUsers) => {
  const [showModal, setShowModal] = React.useState(false);
  const [userToBan, setUserToBan] = React.useState('')

  const provideReasonToBan = (userEmail: string) => {
    setUserToBan(userEmail)
    setShowModal(true)
  }

  const blockUser = async (reason: string) => {
    if (banUser) await banUser({ email: userToBan, reason });
    setShowModal(false)
  }

  const unblockUser = async (email: string) => {
    if (unbanUser) await unbanUser(email)
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
                    {user['ban.reason'] ? (<p>User banned: {user['ban.reason']}</p>) : null}
                    {user.firstName ? (<p>First name: {user.firstName}</p>) : null}
                    {user.lastName ? (<p>Last name: {user.lastName}</p>) : null}
                  </div>
                  {!user['ban.reason'] ? (
                    <BasicButton
                      className={'w-16 bg-red-600 hover:bg-red-800 h-9'}
                      onClick={async () => provideReasonToBan(user.email)}
                    >
                      Ban
                    </BasicButton>
                  ) : (
                    <BasicButton
                      className={'w-16 bg-green-600 hover:bg-green-800 h-9'}
                      onClick={() => unblockUser(user.email)}
                    >
                      Unban
                    </BasicButton>
                  )}
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
          text={`You are about to ban user ${userToBan}. Please, provide the reason`}
          action={blockUser}
        />) : null}
    </>
  );
};

export default GetUsers;
