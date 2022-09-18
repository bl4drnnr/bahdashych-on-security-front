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
        <div>
          <div>
            {rows.map(user => (
              <div key={user.id}>
                <div>
                  <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    {user['ban.reason'] ? (<p>User banned: {user['ban.reason']}</p>) : null}
                    {user.firstName ? (<p>First name: {user.firstName}</p>) : null}
                    {user.lastName ? (<p>Last name: {user.lastName}</p>) : null}
                  </div>
                  {!user['ban.reason'] ? (
                    <BasicButton
                      onClick={async () => provideReasonToBan(user.email)}
                    >
                      Ban
                    </BasicButton>
                  ) : (
                    <BasicButton
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
