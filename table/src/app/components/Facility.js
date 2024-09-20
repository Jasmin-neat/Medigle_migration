import React from "react";
import { getFacility } from "../apis";
import { useEffect, useState } from "react";

const FacilityDetails = ({ id }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function func() {
      const temp = await getFacility(id);
      setData(temp);
    }
    func();
  }, []);

  return (
    <div className="container p-4 mx-auto mt-10">
      <table className="w-full border border-black table-auto">
        <tbody>
          {/* Row 1: ID */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              ID
            </td>
            <td className="px-4 py-2 border border-black">{data.id}</td>
          </tr>

          {/* Row 2: Facility Name */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              施設名
            </td>
            <td className="px-4 py-2 border border-black">
              {data.facility_name}
            </td>
          </tr>

          {/* Row 3: Facility Kana */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              施設名（カナ）
            </td>
            <td className="px-4 py-2 border border-black">
              {data.facility_name_kana}
            </td>
          </tr>

          {/* Row 4: Zip Code */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              郵便番号
            </td>
            <td className="px-4 py-2 border border-black">
              {data.facility_zip}
            </td>
          </tr>

          {/* Row 5: Prefecture */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              都道府県
            </td>
            <td className="px-4 py-2 border border-black">
              {data.facility_prefecture}
            </td>
          </tr>

          {/* Row 6: Address */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              住所
            </td>
            <td className="px-4 py-2 border border-black">
              {data.facility_address}
            </td>
          </tr>

          {/* Row 7: Building Name */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              ビル・マンション名
            </td>
            <td className="px-4 py-2 border border-black">
              {data.facility_other_address}
            </td>
          </tr>

          {/* Row 8: TEL */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              TEL
            </td>
            <td className="px-4 py-2 border border-black">
              {data.facility_tel}
            </td>
          </tr>

          {/* Row 9: FAX */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              FAX
            </td>
            <td className="px-4 py-2 border border-black">
              {data.facility_fax}
            </td>
          </tr>

          {/* Row 10: Website */}
          <tr>
            <td className="bg-[#1f5496] text-white px-4 py-2 border border-black">
              WEBサイト
            </td>
            <td className="px-4 py-2 border border-black">
              <a href={data.website} className="text-blue-500 underline">
                {data.facility_website_url}
              </a>
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

export default FacilityDetails;
