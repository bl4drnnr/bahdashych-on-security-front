import React from "react";
import { IUsers } from "../../models/response/users.interface";
import { useGetUsersService } from "../../services/user/useGetUsers.service";
import GetUsers from "./user/GetUsers.component";

const AdminUser = () => {
  const [users, setUsers] = React.useState<IUsers>({ count: 0, rows: [] });

  const { getUsers } = useGetUsersService()

  const fetchUsers = async () => {
    const listOfUsers = await getUsers({
      offset: 0,
      limit: 10
    }, sessionStorage.getItem('_at'))
    setUsers(listOfUsers)
  }
  return (
    <>
      <GetUsers
        count={users?.count}
        rows={users?.rows}
      />
    </>
  );
};

export default AdminUser;
