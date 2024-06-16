import Sidebar from "../src/components/Sidebar";
import Header from "../src/components/Header";
import Waitlist from "../src/components/Waitlist";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [tableData, setTableData] = useState({
    tableHead: [],
    tableRecord: [],
  });
  const [visibleColumns, setVisibleColumns] = useState([
    { label: "", visible: true },
    { label: "Order Created On", visible: true },
    { label: "Payer", visible: true },
    { label: "Status", visible: true },
    { label: "Email", visible: true },
    { label: "Payer Phone", visible: true },
    { label: "Service", visible: true },
    { label: "Scheduled", visible: true },
  ]);
  const getTableData = (data, head) => {
    setTableData({ tableRecord: data, tableHead: head });
  };

  const handleColumnVisibilityChange = (updatedColumns) => {
    setVisibleColumns(updatedColumns);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header
          tableData={tableData}
          visibleColumns={visibleColumns}
          handleColumnVisibilityChange={handleColumnVisibilityChange}
        />
        <Waitlist getTableData={getTableData}  visibleColumns={visibleColumns} />
        <Footer />
      </div>
    </div>
  );
}
