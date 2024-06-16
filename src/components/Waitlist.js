import React, { useEffect, useState } from "react";
import Image from "next/image";
import images from "../../public/Images";

const Waitlist = ({ getTableData, visibleColumns }) => {
  const waitlist = [
    {
      checked: false,
      ordercreatedon: "Sun, 07 Jan 2024",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      payerphone: "+91 +966559188676",
      service: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      checked: false,
      ordercreatedon: "Sat, 06 Jan 2024",
      payer: "Hannibal Smith",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerphone: "+91 +966578632254",
      service: "Swim beginner for class new Ses...",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      checked: false,
      ordercreatedon: "Fri, 05 Jan 2024",
      payer: "April Curtis",
      status: "Inactive",
      email: "aprilcurtis@gmail.com",
      payerphone: "+91 +966558441503",
      service: "Fitness Session",
      scheduled: "Sat, 06 Jan 2024 2:42 PM",
    },
    {
      checked: false,
      ordercreatedon: "Thu, 04 Jan 2024",
      payer: "Michael Knight",
      status: "Active",
      email: "smith@gmail.com",
      payerphone: "+91 +966536605363",
      service: "Aerobics Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      checked: false,
      ordercreatedon: "Wed, 03 Jan 2024",
      payer: "Templeton Peck",
      status: "Active",
      email: "michaelknight@gmail.com",
      payerphone: "+91 +966503534287",
      service: "Boxing Session",
      scheduled: "Fri, 05 Jan 2024 2:42 PM",
    },
    {
      checked: false,
      ordercreatedon: "Tue, 02 Jan 2024",
      payer: "Theodore T.C. Calvin",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerphone: "+91 +966530269650",
      service: "Kids play Session",
      scheduled: "Thu, 04 Jan 2024 2:42 PM",
    },
    {
      checked: false,
      ordercreatedon: "Mon, 01 Jan 2024",
      payer: "Michael Knight",
      status: "Lead",
      email: "Mikeh@gmail.com",
      payerphone: "+91 +96656182220",
      service: "Appointment Session",
      scheduled: "Sat, 06 Jan 2024 2:42 PM",
    },
    {
      checked: false,
      ordercreatedon: "Sun, 30 Dec 2023",
      payer: "Mike Torello",
      status: "Inactive",
      email: "hannibalsmith@gmail.com",
      payerphone: "+91 +966544628109",
      service: "Exercise Session",
      scheduled: "Sat, 29 Dec 2023 2:42 PM",
    },
    {
      checked: false,
      ordercreatedon: "Sat, 29 Dec 2023",
      payer: "Templeton Peck",
      status: "Active",
      email: "templeto@gmail.com",
      payerphone: "+91 +96650485058",
      service: "Session Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      checked: false,
      ordercreatedon: "Wed, 28 Dec 2023",
      payer: "Peter Thornton",
      status: "Inactive",
      email: "peterthornton@gmail.com",
      payerphone: "+91 +96658441497",
      service: "Session Session",
      scheduled: "Wed, 03 Jan 2024 2:42 PM",
    },
    {
      checked: false,
      ordercreatedon: "Sun, 26 Dec 2023",
      payer: "Lynn Tanner",
      status: "Inactive",
      email: "Lynn@gmail.com",
      payerphone: "+91 +966506424822",
      service: "Fitness Session",
      scheduled: "Mon, 27 Dec 2023 2:42 PM",
    },
    {
      checked: false,
      ordercreatedon: "Sun, 25 Dec 2023",
      payer: "Col. Roderick Decker",
      status: "Active",
      email: "decker@gmail.com",
      payerphone: "+91 +966558441493",
      service: "Kids play Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
  ];

  const tableheader = [
    { image: ``, label: "" },
    { image: images.CalendarIcon, label: "Order Created On" },
    { image: images.UserIcon, label: "Payer" },
    { image: images.StatusIcon, label: "Status" },
    { image: images.HashIcon, label: "Email" },
    { image: images.HashIcon, label: "Payer Phone" },
    { image: images.HashIcon, label: "Service" },
    { image: images.CalendarIcon, label: "Scheduled" },
  ];

  const [checkAll, setCheckAll] = useState(false);
  const [tableRecord, setTableRecord] = useState(waitlist);

  useEffect(() => {
    if (tableRecord.length > 0) {
      setTableRecord((prevWaitlist) =>
        prevWaitlist.map((item) => ({
          ...item,
          checked: checkAll,
        }))
      );
    }
    getTableData(tableRecord, visibleColumns);
  }, [checkAll, visibleColumns]);

  const getColor = (status) => {
    switch (status) {
      case "Active":
        return {
          bg: "bg-[#F0FDF9] rounded-2xl",
          dot: "w-2 h-2 rounded-lg bg-[#15803D]",
          text: "text-[#15803D]",
        };
      case "Inactive":
        return {
          bg: "bg-[#F1F5F9] rounded-2xl",
          dot: "w-2 h-2 rounded-lg bg-[#334155]",
          text: "text-[#334155]",
        };
      case "Lead":
        return {
          bg: "bg-[#EFF6FF] rounded-2xl",
          dot: "w-2 h-2 rounded-lg bg-[#3B82F6]",
          text: "text-[#3B82F6]",
        };
      default:
        return {
          bg: "bg-gray-200 rounded-2xl",
          dot: "w-2 h-2 rounded-lg bg-black",
          text: "text-black",
        };
    }
  };
  const handleChecked = (e, id) => {
    const updatedArray = tableRecord.map((item, index) => {
      if (id === index) {
        return { ...item, checked: e.target.checked };
      }
      return item;
    });
    setTableRecord(updatedArray);
  };
  console.log("visible column", visibleColumns);
  return (
    <div className="px-4 py-2 flex">
      <table className="flex-1">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 block md:table-row">
            {tableheader &&
              tableheader.length > 0 &&
              tableheader.map((item, index) => {
                if (visibleColumns[index]?.visible) {
                  return index === 0 ? (
                    <th
                      key={index}
                      className="bg-gray-100 text-center p-2 text-gray-700 font-bold block md:table-cell"
                    >
                      <input
                        type="checkbox"
                        value={checkAll}
                        onChange={(e) => setCheckAll(e.target.checked)}
                        className="w-4 h-4 accent-black"
                      />
                    </th>
                  ) : (
                    <th
                      key={index}
                      className="bg-gray-100 p-2 text-xs text-gray-700 font-bold block md:table-cell"
                    >
                      <div className="flex items-center space-x-2">
                        <Image
                          src={item?.image}
                          alt="rightArrow"
                          className="w-4 h-4"
                        />
                        <div>{item?.label}</div>
                      </div>
                    </th>
                  );
                }
              })}
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {tableRecord &&
            tableRecord.length > 0 &&
            tableRecord.map((entry, index) => (
              <tr
                key={index}
                className="border border-gray-300 block md:table-row"
              >
                {visibleColumns.map((col, colIndex) => {
                  if (col.visible) {
                    return colIndex === 0 ? (
                      <td key={colIndex} className="p-2 block md:table-cell">
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-black"
                          onChange={(e) => handleChecked(e, index)}
                          checked={entry.checked}
                        />
                      </td>
                    ) : col?.label.toLowerCase() === "status" ? (
                      <td className="p-2 block md:table-cell items-center">
                        <div
                          className={`flex w-auto pt-2 pb-2 justify-center items-center space-x-2 text-black ${
                            getColor(entry?.status)?.bg
                          }`}
                        >
                          <div
                            className={`${getColor(entry?.status)?.dot}`}
                          ></div>
                          <div
                            className={`text-xs ${
                              getColor(entry?.status)?.text
                            }`}
                          >
                            {entry.status}
                          </div>
                        </div>
                      </td>
                    ) : (
                      <td
                        key={colIndex}
                        className="p-2 block md:table-cell text-xs"
                      >
                        {entry[col.label.toLowerCase().replace(/ /g, "")]}
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Waitlist;
