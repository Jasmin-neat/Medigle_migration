"use client";

import React, { useState, useEffect } from "react";
import { getData } from "../apis";
import { useRouter } from "next/navigation";

const MedicalInstitutionTable = () => {
  const [data, setData] = useState([]);
  const [pageStart, setPageStart] = useState(1);
  const [pageEnd, setPageEnd] = useState(100);
  const [total, setTotal] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const router = useRouter();

  useEffect(() => {
    async function func() {
      let temp = await getData(1);
      setData(temp.data);
      setTotal(temp.total);
    }
    func();
  }, []);

  const prevPage = async () => {
    if (pageNumber > 1) {
      let tempNum = pageNumber - 1;
      setPageNumber(tempNum);
      console.log(tempNum, total);
      setPageStart(100 * (tempNum - 1) + 1);
      setPageEnd(100 * tempNum);
      let temp = await getData(tempNum);
      setData(temp.data);
    }
  };

  const nextPage = async () => {
    if (pageNumber < total / 100) {
      let tempNum = pageNumber + 1;
      setPageNumber(tempNum);
      console.log(tempNum, total);
      setPageStart(100 * (tempNum - 1) + 1);
      setPageEnd(100 * tempNum);
      let temp = await getData(tempNum);
      setData(temp.data);
    }
  };

  const pageNavigate = async () => {
    setPageStart(100 * (pageNumber - 1) + 1);
    setPageEnd(100 * pageNumber);
    let temp = await getData(pageNumber);
    setData(temp.data);
  };

  // Function to handle select value changes
  const handleChange = (e, id, field) => {
    const newValue = e.target.value;
    const updatedData = data.map((institution) => {
      if (institution.id === id) {
        return { ...institution, [field]: newValue };
      }
      return institution;
    });
    setData(updatedData);
  };

  const handleRowClick = (id) => {
    router.push(`/facilities/${id}`);
  };

  return (
    <div className="container p-4 mx-auto mt-5">
      <div className="flex flex-row-reverse items-center">
        <div className="flex flex-row">
          <input
            value={pageNumber}
            onChange={(e) => setPageNumber(e.target.value)}
            className="w-20 h-10 text-center border-[black] border-[1px]"
          />
          <button
            className="w-20 h-10 text-center bg-[#1f5496] text-[white]"
            onClick={pageNavigate}
          >
            移動
          </button>
        </div>
        <div>
          <button onClick={prevPage} className="mr-2">
            ◀
          </button>
          <span>{pageStart}</span>
          <span>-</span>
          <span>{pageEnd}</span>
          <span>/</span>
          <span>{total}</span>
          <button onClick={nextPage} className="ml-2 mr-2">
            ▶
          </button>
        </div>
      </div>
      <table className="min-w-full mt-5 border border-collapse border-black table-auto overflow">
        <thead>
          <tr className="bg-[#1f5496] text-[white] border border-black">
            <th className="px-4 py-2 border border-black">Contract</th>
            <th className="px-4 py-2 border border-black">ID</th>
            <th className="px-4 py-2 border border-black">
              Name of Medical Institution
            </th>
            <th className="px-4 py-2 border border-black">Post Code</th>
            <th className="px-4 py-2 border border-black">Prefectures</th>
            <th className="px-4 py-2 border border-black">Address</th>
            <th className="px-4 py-2 border border-black">TEL</th>
            <th className="px-4 py-2 border border-black">Updated On</th>
          </tr>
        </thead>
        <tbody>
          {data.map((institution) => (
            <tr
              key={institution.id}
              className="text-center border border-black cursor-pointer"
              onClick={() => handleRowClick(institution.id)}
            >
              <td className="px-4 py-2 border border-black">
                <select
                  className={`px-2 py-1 w-full border rounded ${
                    institution.contract_status === "1" ||
                    institution.contract_status === 1
                      ? "bg-[#c7d1b5]"
                      : "bg-[#c8d3e6]"
                  }`}
                  value={institution.contract_status}
                  onChange={(e) =>
                    handleChange(e, institution.id, "contract_status")
                  }
                  onClick={(e) => e.stopPropagation()}
                >
                  <option value="1">-</option>
                  <option value="0">○</option>
                </select>
              </td>

              <td className="px-4 py-2 border border-black">
                {institution.id}
              </td>
              <td className="px-4 py-2 border border-black">
                {institution.facility_name}
              </td>
              <td className="px-4 py-2 border border-black">
                {institution.facility_zip}
              </td>

              <td className="px-4 py-2 border border-black">
                <select
                  className={`px-2 py-1 w-full border rounded ${
                    institution.facility_prefecture === 13 ||
                    institution.facility_prefecture === "13"
                      ? "bg-[#c0c7d4]"
                      : "bg-[#d2cfc5]"
                  }`}
                  value={institution.facility_prefecture}
                  onChange={(e) =>
                    handleChange(e, institution.id, "facility_prefecture")
                  }
                  onClick={(e) => e.stopPropagation()}
                >
                  <option value="13">大阪府</option>
                  <option value="27">東京市</option>
                </select>
              </td>

              {/* Address field with dynamic background color */}
              <td className="px-4 py-2 border border-black">
                <select
                  className={`px-2 py-1 w-full border rounded ${
                    institution.facility_address === "大阪市"
                      ? "bg-[#c4b9e6]"
                      : "bg-[#c6cee6]"
                  }`}
                  value={institution.facility_address}
                  onChange={(e) =>
                    handleChange(e, institution.id, "facility_address")
                  }
                  onClick={(e) => e.stopPropagation()}
                >
                  <option value="大阪市">大阪市</option>
                  <option value="Osaka City">Osaka City</option>
                </select>
              </td>

              <td className="px-4 py-2 border border-black">
                {institution.facility_tel}
              </td>
              <td className="px-4 py-2 border border-black">
                {institution.updated_at}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalInstitutionTable;
