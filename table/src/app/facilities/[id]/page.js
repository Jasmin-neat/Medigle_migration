"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import FacilityDetails from "@/app/components/Facility";
import ContractDetails from "@/app/components/Contract";
import UserTable from "@/app/components/UserTable";

const FacilityPage = () => {
  const { id } = useParams();
  const [facilityId, setFacilityId] = useState(null);

  useEffect(() => {
    if (id) {
      setFacilityId(id);
    }
  }, []);

  if (!facilityId) {
    return <div>Error</div>;
  }

  return (
    <div>
      <FacilityDetails id={facilityId} />
      <ContractDetails id={facilityId} />
      <UserTable id={facilityId} />
    </div>
  );
};

export default FacilityPage;
