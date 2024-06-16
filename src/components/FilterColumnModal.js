import { useState, useRef, useEffect } from "react";

const FilterColumnModal = ({
  isOpen,
  onClose,
  visibleColumns,
  onColumnVisibilityChange,
}) => {
  const popoverRef = useRef();
  const [filterColumn, setFilterColumn] = useState(visibleColumns);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const handleChecked = (e, id) => {
    const updatedArray = filterColumn.map((item, index) => {
      if (id === index) {
        return { ...item, visible: e.target.checked };
      }
      return item;
    });
    setFilterColumn(updatedArray);
    onColumnVisibilityChange(updatedArray);
  };

  const handleReset = () => {
    const resetColumns = visibleColumns.map((col) => ({
      ...col,
      visible: true,
    }));
    setFilterColumn(resetColumns);
    onColumnVisibilityChange(resetColumns);
    onClose();
  };

  const handleApplyFilter = () => {
    onColumnVisibilityChange(filterColumn);
    onClose();
  };

  return (
    <div
      ref={popoverRef}
      className="absolute right-0 mt-14 w-80 md:w-96 bg-white rounded-lg shadow-lg p-6 z-50"
    >
      <h2 className="text-md font-semibold mb-4">Edit Columns</h2>
      <p className="text-gray-600 text-sm mb-4">
        Select the columns to rearrange
      </p>
      <div className="space-y-2 mb-6">
        {filterColumn &&
          filterColumn.length > 0 &&
          filterColumn.map((item, index) => {
            return (
              <div key={index} className="flex items-center space-x-2">
                {index >= 1 && (
                  <>
                    <input
                      type="checkbox"
                      onChange={(e) => handleChecked(e, index)}
                      checked={item.visible}
                      className="form-checkbox h-4 w-4 accent-black"
                    />
                    <label className="border border-gray-300 w-80 p-2 rounded-lg text-gray-800 text-xs">
                      {item?.label}
                    </label>
                  </>
                )}
              </div>
            );
          })}
      </div>
      <div className="flex justify-between">
        <button
          className="w-36 px-4 py-2 border border-gray-300 rounded-md text-xs text-gray-700"
          onClick={handleReset}
        >
          Reset to Default
        </button>
        <button
          className="w-36 px-4 py-2 bg-black text-white text-xs rounded-md"
          onClick={handleApplyFilter}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterColumnModal;
