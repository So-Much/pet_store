import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import Stats from "../../components/Stats";

export default function Dashboard() {
  return (
    <div className="madmin_sidebar">
      <Sidebar />
      <div>
        <Stats />
      </div>
    </div>
  );
}
