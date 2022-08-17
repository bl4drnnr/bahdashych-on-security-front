import React from "react";
import { IUsers } from "../../models/response/users.interface";
import { useGetUsersService } from "../../services/user/useGetUsers.service";

const AdminUser = () => {
  const [users, setUsers] = React.useState<IUsers | undefined>({ count: 0, rows: [] });

  const { getUsers } = useGetUsersService()

  const fetchUsers = async () => {
    const listOfUsers = await getUsers({
      offset: 0,
      limit: 10
    }, sessionStorage.getItem('_at'))
    setUsers(listOfUsers)
  }
  return (
    <div>

    </div>
  );
};

export default AdminUser;
