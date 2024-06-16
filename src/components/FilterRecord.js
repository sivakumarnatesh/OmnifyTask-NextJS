import { useState } from "react";
import Image from "next/image";
import images from "../../public/Images";

const FilterRecord = ({ modalVisible, setModalVisible, tableData }) => {
  const ordersTime = [
    "All",
    "Custom",
    "Last 30 days",
    "This month",
    "Last month",
    "This quarter",
    "2 quarter ago",
    "This Year",
    "Last Year",
  ];
  const [selectedBtn, setSelectedBtn] = useState("Scheduled Date");
  const [query, setQuery] = useState("");

  // console.log("tableData", tableData?.tableRecord);
  const filteredResults = tableData?.tableRecord.filter((result) =>
    result.payer.toLowerCase().includes(query.toLowerCase())
  );

  const [result, setResult] = useState("");
  const [searchBy, setSearchBy] = useState("name");

  const filteredResults1 = tableData?.tableRecord.filter((item) =>
    item.payer.toLowerCase().includes(result.toLowerCase())
  );

  const [searchType, setSearchType] = useState("tags");
  const [serviceType, setServiceType] = useState("");
  const [status, setStatus] = useState("");

  const serviceTypes = [
    "Show all service type",
    "Class",
    "Appointment",
    "Facility",
    "Class pack",
    "Membership",
    "General items",
  ];
  const statusvalues = ["Show all", "Public", "Private", "Disable", "Draft"];

  const [scheduledDate, setScheduledDate] = useState({
    orderDropdown: "",
    fromDate: "",
    toDate: "",
  });

  const handleReset = () => {
    if (selectedBtn === "Scheduled Date") {
      setScheduledDate({
        orderDropdown: "",
        fromDate: "",
        toDate: "",
      });
    } else if (selectedBtn === "People") {
      setQuery("");
    } else if (selectedBtn === "Services / Products") {
      if (searchBy === "name") {
        setResult("");
      } else if (searchBy === "tags") {
        setServiceType("");
        setStatus("");
      }
    }
    setModalVisible(!modalVisible);
  };
  
  return (
    <div>
      {modalVisible && (
        <div className="fixed flex items-center justify-left inset-0 left-256px bottom-10px">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full h-96 mx-4">
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-lg font-medium text-gray-900">
                Scheduled Date
              </h2>
            </div>
            <div className="flex">
              <div className="w-1/3 border-r">
                <div className="flex flex-col px-6 py-4">
                  <button
                    onClick={() => setSelectedBtn("Scheduled Date")}
                    className={`flex items-center px-4 py-2 text-left text-gray-700 hover:bg-gray-100 ${
                      selectedBtn === "Scheduled Date" ? "bg-gray-100" : ""
                    }`}
                  >
                    <span className="mr-2">
                      {" "}
                      <Image
                        src={images.CalendarIcon}
                        alt="rightArrow"
                        className="w-4 h-4 text-gray-600 cursor-pointer"
                      />
                    </span>{" "}
                    Scheduled Date
                  </button>
                  <button
                    onClick={() => setSelectedBtn("People")}
                    className={`flex items-center px-4 py-2 text-left text-gray-700 hover:bg-gray-100 ${
                      selectedBtn === "People" ? "bg-gray-100" : ""
                    }`}
                  >
                    <span className="mr-2">
                      {" "}
                      <Image
                        src={images.UserIcon}
                        alt="rightArrow"
                        className="w-4 h-4 text-gray-600 cursor-pointer"
                      />
                    </span>{" "}
                    People
                  </button>
                  <button
                    onClick={() => setSelectedBtn("Services / Products")}
                    className={`flex items-center px-4 py-2 text-left text-gray-700 hover:bg-gray-100 ${
                      selectedBtn === "Services / Products" ? "bg-gray-100" : ""
                    }`}
                  >
                    <span className="mr-2">
                      {" "}
                      <Image
                        src={images.DashboardIcon}
                        alt="rightArrow"
                        className="w-4 h-4 text-gray-600 cursor-pointer"
                      />
                    </span>{" "}
                    Services / Products
                  </button>
                </div>
              </div>
              <div className="w-2/3">
                {selectedBtn === "Scheduled Date" ? (
                  <div className="px-6 py-4 h-60">
                    <div className="mb-4">
                      <label className="block text-gray-700">
                        Show orders for
                      </label>
                      <select
                        value={scheduledDate?.orderDropdown}
                        onChange={(e) =>
                          setScheduledDate((prev) => ({
                            ...prev,
                            orderDropdown: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full px-2 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-black-500 focus:border-black-500 sm:text-sm"
                      >
                        {ordersTime.map((item, index) => {
                          return <option key={index}>{item ?? ""}</option>;
                        })}
                      </select>
                    </div>
                    <div className="flex justify-between">
                      <div className="mb-4">
                        <label className="block text-gray-700">From</label>
                        <input
                          type="date"
                          value={scheduledDate?.fromDate}
                          onChange={(e) =>
                            setScheduledDate((prev) => ({
                              ...prev,
                              fromDate: e.target.value,
                            }))
                          }
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-black-500 focus:border-black-500 sm:text-sm"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700">To</label>
                        <input
                          type="date"
                          value={scheduledDate?.toDate}
                          onChange={(e) =>
                            setScheduledDate((prev) => ({
                              ...prev,
                              toDate: e.target.value,
                            }))
                          }
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-black-500 focus:border-black-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                ) : selectedBtn === "People" ? (
                  <div className="px-6 py-4 h-60">
                    <div className="relative mb-4">
                      <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="Search"
                      />
                    </div>
                    <div>
                      <p className="text-gray-600">
                        Showing {query !== "" ? filteredResults.length : 0}{" "}
                        results matching '{query}'
                      </p>
                      <ul className="mt-2">
                        {query !== "" &&
                          filteredResults.map((result, index) => (
                            <li key={index} className="flex items-center py-2">
                              <input
                                type="checkbox"
                                className="mr-3 accent-black"
                              />
                              <span className="mr-2">{result.payer}</span>
                              <span
                                className={`px-2 py-1 text-sm rounded ${
                                  result.role === "Payer"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {result.status}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="px-6 py-4 h-60">
                    <div className="flex items-center space-x-4 mb-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="searchBy"
                          value="name"
                          checked={searchBy === "name"}
                          onChange={() => setSearchBy("name")}
                          className="mr-2 accent-black"
                        />
                        Search by name
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="searchBy"
                          value="tags"
                          checked={searchBy === "tags"}
                          onChange={() => setSearchBy("tags")}
                          className="mr-2 accent-black"
                        />
                        Search by tags
                      </label>
                    </div>
                    {searchBy === "name" ? (
                      <>
                        <div className="relative mb-4">
                          <input
                            type="text"
                            value={result}
                            onChange={(e) => setResult(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="Search"
                          />
                          {result && (
                            <button
                              onClick={() => setResult("")}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                              &times;
                            </button>
                          )}
                        </div>
                        <div>
                          <p className="text-gray-600">
                            Showing{" "}
                            {result !== "" ? filteredResults1.length : 0}{" "}
                            results matching '{result}'
                          </p>
                          <ul className="mt-2">
                            {result !== "" &&
                              filteredResults1.map((result, index) => (
                                <li
                                  key={index}
                                  className="flex items-center py-2"
                                >
                                  <input
                                    type="checkbox"
                                    className="mr-3 accent-black"
                                  />
                                  <span className="mr-2">{result.payer}</span>
                                  {/* <span className="px-2 py-1 text-sm rounded bg-gray-100 text-gray-800 mr-2">
                                  {result.status}
                                </span> */}
                                  <span
                                    className={`px-2 py-1 text-sm rounded ${
                                      result.visibility === "Public"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-yellow-100 text-yellow-800"
                                    }`}
                                  >
                                    {result.status}
                                  </span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="mb-4">
                          <label className="block mb-2">Service type</label>
                          <select
                            value={serviceType}
                            onChange={(e) => setServiceType(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                          >
                            {serviceTypes.map((item, index) => {
                              return <option value={item}>{item}</option>;
                            })}
                          </select>
                        </div>
                        <div>
                          <label className="block mb-2">Status</label>
                          <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                          >
                            {statusvalues.map((item, index) => {
                              return <option value={item}>{item}</option>;
                            })}
                          </select>
                        </div>
                      </>
                    )}
                  </div>
                )}

                <div className="flex justify-end px-6 py-4 bg-gray-50">
                  <button
                    type="button"
                    className="mr-4 px-4 py-2 bg-gray-200 text-black-700 border border-none rounded-md shadow-sm"
                    onClick={handleReset}
                  >
                    Reset to Default
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-black text-white rounded-md shadow-sm"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterRecord;
