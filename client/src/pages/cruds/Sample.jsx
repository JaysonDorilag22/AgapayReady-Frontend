import React from "react";
import SampleForm from "../Sample/SampleForm";
import SampleTable from "../Sample/SampleTable";

export default function Sample() {
  return (
    <div className="flex">
      <div className="mr-4">
        <SampleForm />
      </div>
      <div>
        <SampleTable />
      </div>
    </div>
  );
}
