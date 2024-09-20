import React, { useState, useEffect } from "react";
import { getUserData } from "../apis";
import { useRouter } from "next/navigation";

const UserTable = ({ id }) => {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function func() {
      const temp = await getUserData(id);
      setUsers(temp);
      console.log(temp);
    }
    func();
  }, []);

  const handleRowClick = (id) => {
    router.push(`/users/${id}`);
  };

  return (
    <div className="container p-4 mx-auto mt-10">
      <table className="w-full border border-black table-auto">
        <thead>
          <tr className="bg-[#1f5496] text-white">
            <th className="px-4 py-2 border border-black">システムID</th>
            <th className="px-4 py-2 border border-black">ユーザーID</th>
            <th className="px-4 py-2 border border-black">ユーザー名</th>
            <th className="px-4 py-2 border border-black">有効</th>
            <th className="px-4 py-2 border border-black">更新日</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="text-center border border-black cursor-pointer"
              onClick={() => handleRowClick(user.id)}
            >
              <td className="px-4 py-2 border border-black">{user.id}</td>
              <td className="px-4 py-2 border border-black">{user.user_id}</td>
              <td className="px-4 py-2 border border-black">
                {user.user_name}
              </td>
              <td
                className={`px-4 py-2 border border-black ${
                  user.is_active === 1 ? "bg-[#e5f4e3]" : ""
                }`}
              >
                {user.is_active === 1 ? "有効" : "無効"}
              </td>
              <td className="px-4 py-2 border border-black">
                {user.updated_at}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
