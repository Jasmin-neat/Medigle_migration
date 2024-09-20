import React, { useState, useEffect } from "react";
import { getContract } from "../apis";

const ContractDetails = ({ id }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function func() {
      const temp = await getContract(id);
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
              System ID
            </td>
            <td className="px-4 py-2 border border-black">{data.id}</td>
          </tr>

          {/* Row 2: EPARK ID */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              EPARK ID
            </td>
            <td className="px-4 py-2 border border-black">{data.epark_id}</td>
          </tr>

          {/* Row 3: Contract Plan */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              契約プラン
            </td>
            <td className="px-4 py-2 border border-black">
              {data.contract_plan}
            </td>
          </tr>

          {/* Row 4: Contract Status */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              契約ステータス
            </td>
            <td className="px-4 py-2 border border-black">
              {data.contract_status}
            </td>
          </tr>

          {/* Row 5: Contract Start */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              契約期間（開始）
            </td>
            <td className="px-4 py-2 border border-black">
              {data.contract_start_date}
            </td>
          </tr>

          {/* Row 6: Contract End */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              契約期間（終了）
            </td>
            <td className="px-4 py-2 border border-black">
              {data.contract_end_date}
            </td>
          </tr>

          {/* Row 7: Contract Manager */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              契約担当者名
            </td>
            <td className="px-4 py-2 border border-black">
              {data.contract_contract_name}
            </td>
          </tr>

          {/* Row 8: Contract Manager Dept */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              契約担当者部署
            </td>
            <td className="px-4 py-2 border border-black">
              {data.contract_contract_department}
            </td>
          </tr>

          {/* Row 9: Contract Manager TEL */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              契約担当者TEL
            </td>
            <td className="px-4 py-2 border border-black">
              {data.contract_contract_tel}
            </td>
          </tr>

          {/* Row 10: Contract Manager FAX */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              契約担当者FAX
            </td>
            <td className="px-4 py-2 border border-black">
              {data.contract_contract_fax}
            </td>
          </tr>

          {/* Row 11: Updater */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              更新者
            </td>
            <td className="px-4 py-2 border border-black">{data.updated_by}</td>
          </tr>

          {/* Row 12: Registered On */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              登録日
            </td>
            <td className="px-4 py-2 border border-black">{data.created_at}</td>
          </tr>

          {/* Row 13: Updated On */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              更新日
            </td>
            <td className="px-4 py-2 border border-black">{data.updated_at}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContractDetails;
