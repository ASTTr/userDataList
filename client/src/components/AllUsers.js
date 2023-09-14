import axios from "axios";
import { useEffect, useState } from "react";

export const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(
        "http://127.0.0.1:3030/api/users/getUsers"
      );
      setAllUsers(data.users);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="overflow-auto users-tab">
        <div className="user-header">List Of All Users</div>
        <table cellPadding="0" cellSpacing="0" border="0" className="">
          <thead style={{ borderBottom: "1px solid" }}>
            <tr className="">
              <th className="px-3">
                <div className="">First Name</div>
              </th>
              <th className="px-3">
                <div className="">Last Name</div>
              </th>
              <th className="px-3">
                <div className="">E-Mail</div>
              </th>
              <th className="px-3">
                <div className="">Country</div>
              </th>
              <th className="px-3">
                <div className="">State</div>
              </th>
              <th className="px-3">
                <div className="">City</div>
              </th>
              <th className="px-3">
                <div className="">Gender</div>
              </th>
              <th className="px-3">
                <div className="">Date Of Birth {"(DOB)"}</div>
              </th>
              <th className="px-3">
                <div className="">Age</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user) => (
              <tr>
                <td className="px-3">
                  <div>{user.firstName}</div>
                </td>
                <td className="px-3">
                  <div>{user.lastName}</div>
                </td>
                <td className="px-3">
                  <div>{user.email}</div>
                </td>
                <td className="px-3">
                  <div>{user.country}</div>
                </td>
                <td className="px-3">
                  <div>{user.state}</div>
                </td>
                <td className="px-3">
                  <div>{user.city}</div>
                </td>
                <td className="px-3">
                  <div>{user.gender}</div>
                </td>
                <td className="px-3">
                  <div>{user.dob}</div>
                </td>
                <td className="px-3">
                  <div>{user.age}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
