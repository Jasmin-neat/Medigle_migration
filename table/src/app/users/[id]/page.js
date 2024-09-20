"use client";

import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { getUser } from "@/app/apis";

const UserDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    async function func() {
      const temp = await getUser(id);
      setData(temp);
    }
    func();
  }, []);

  return (
    <div className="container p-4 mx-auto mt-10">
      <table className="w-full border border-black table-auto">
        <tbody>
          {/* Row 1: System ID */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              システムID
            </td>
            <td className="px-4 py-2 border border-black">{data.id}</td>
          </tr>

          {/* Row 2: EPARK ID */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              施設ID
            </td>
            <td className="px-4 py-2 border border-black">
              {data.facility_id}
            </td>
          </tr>

          {/* Row 3: Contract Plan */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              ユーザーID
            </td>
            <td className="px-4 py-2 border border-black">{data.user_id}</td>
          </tr>

          {/* Row 4: Contract Status */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              ユーザーパスワード
            </td>
            <td className="px-4 py-2 border border-black bg-[#d0d0d0]"></td>
          </tr>

          {/* Row 5: Contract Start */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              ユーザー名
            </td>
            <td className="px-4 py-2 border border-black">{data.user_name}</td>
          </tr>

          {/* Row 6: Contract End */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              権限
            </td>
            <td className="px-4 py-2 border border-black">{data.user_role}</td>
          </tr>

          {/* Row 7: Contract Manager */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              有効
            </td>
            <td
              className={`px-4 py-2 border border-black ${
                data.is_active === 1 ? "bg-[#e5f4e3]" : ""
              }`}
            >
              {data.is_active === 1 ? "有効" : "無効"}
            </td>
          </tr>

          {/* Row 8: Contract Manager Dept */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              アカウントロック
            </td>
            <td
              className={`px-4 py-2 border border-black ${
                data.is_locked === 1 ? "bg-[#e5f4e3]" : ""
              }`}
            >
              {data.is_locked === 1 ? "有効" : "無効"}
            </td>
          </tr>

          {/* Row 9: Contract Manager TEL */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              更新者
            </td>
            <td className="px-4 py-2 border border-black">{data.updated_by}</td>
          </tr>

          {/* Row 10: Contract Manager FAX */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              登録日
            </td>
            <td className="px-4 py-2 border border-black">{data.created_at}</td>
          </tr>

          {/* Row 11: Updater */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              更新日
            </td>
            <td className="px-4 py-2 border border-black">{data.updated_at}</td>
          </tr>

          {/* Row 12: Registered On */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              削除日
            </td>
            <td className="px-4 py-2 border border-black bg-[#d0d0d0]"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
