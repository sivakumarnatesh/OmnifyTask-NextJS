import { useRef, useState } from "react";
import Image from "next/image";
import images from "../../public/Images";
import FilterColumnModal from "./FilterColumnModal";
import FilterRecord from "./FilterRecord";

const Header = ({ tableData, visibleColumns,handleColumnVisibilityChange  }) => {
  const [selectedFilter, setSelectedFilter] = useState("All Waitlists");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const buttonRef = useRef();

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const closePopover = () => {
    setIsPopoverOpen(false);
  };

  return (
    <div className="flex-1 items-center justify-between p-4 bg-white">
      <div className="font-semibold text-lg">Waitlist</div>

      <div className="flex space-x-4 my-3">
        <button
          onClick={() => setSelectedFilter("All Waitlists")}
          className={`w-1/2 text-left font-medium text-xs px-4 py-2 rounded bg-white-500 ${
            selectedFilter === "All Waitlists"
              ? "border border-black"
              : "border border-black-500"
          }`}
        >
          All Waitlists <span className="text-gray-400 ml-1">100</span>
        </button>
        <button
          onClick={() => setSelectedFilter("Newly Added")}
          className={`w-1/2 text-left font-medium text-xs px-4 py-2 rounded bg-white-500  ${
            selectedFilter === "Newly Added"
              ? "border border-black"
              : "border border-black-500"
          }`}
        >
          Newly Added <span className="text-gray-400 ml-1">50</span>
        </button>
        <button
          onClick={() => setSelectedFilter("Leads")}
          className={`w-1/2 text-left font-medium text-xs px-4 py-2 rounded bg-white-500  ${
            selectedFilter === "Leads"
              ? "border border-black"
              : "border border-black-500"
          }`}
        >
          Leads <span className="text-gray-400 ml-1">20</span>
        </button>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setModalVisible(!modalVisible)}
          className={"px-4 py-2 rounded bg-gray-100"}
        >
          <div className="flex items-center">
            <Image
              src={images?.FilterIcon}
              alt="rightArrow"
              className="w-3 h-3 text-gray-600 cursor-pointer"
            />
            <span className="ml-2 text-xs">Add Filter</span>
          </div>
        </button>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search client"
            className="p-2 border rounded shadow-md"
          />
          <div className="flex space-x-2">
            <Image
              src={images.RefreshIcon}
              alt="rightArrow"
              className="w-8 h-8 text-gray-600 cursor-pointer"
            />
            <button ref={buttonRef} onClick={togglePopover}>
              <Image
                src={images.windowIcon}
                alt="rightArrow"
                className="w-8 h-8 text-gray-600 cursor-pointer"
              />
            </button>
            {isPopoverOpen && (
              <div className="relative">
                <FilterColumnModal
                  isOpen={isPopoverOpen}
                  onClose={closePopover}
                  visibleColumns={visibleColumns}
                  onColumnVisibilityChange={handleColumnVisibilityChange}
                />
              </div>
            )}
            <Image
              src={images.DownloadIcon}
              alt="rightArrow"
              className="w-8 h-8 text-gray-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <FilterRecord
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        tableData={tableData}
      />
    </div>
  );
};

export default Header;
