import { useState } from "react";
import Image from "next/image";
import images from "../../public/Images";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`bg-[#F8FAFC] h-screen border-r border-gray-200 h-screen p-4 flex flex-col justify-between ${
        isCollapsed ? "w-20" : "w-64"
      } transition-width duration-300`}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button onClick={() => setIsCollapsed(!isCollapsed)}>
              <Image
                src={images.LogoIcon}
                alt="rightArrow"
                className={`w-6 h-6 ${isCollapsed && 'ml-3'}`}
              />
            </button>
            {!isCollapsed && (
              <span className="font-bold text-xl">Front-Desk</span>
            )}
          </div>
          {!isCollapsed && (
            <button onClick={() => setIsCollapsed(!isCollapsed)}>
              <Image
                src={images.WrapIcon}
                alt="rightArrow"
                className="w-5 h-5 mr-3"
              />
            </button>
          )}
        </div>
        <div className="mt-2">
          <div>
            <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
              {!isCollapsed && <div className="font-bold text-md">Location Name</div>}
              <div>
                <Image
                  src={images.ArrowIcon}
                  alt="rightArrow"
                  className="w-5 h-5 mr-3"
                />
              </div>
            </div>
            <div className="mt-2 bg-gray-100 rounded-lg p-2 shadow-sm">
              {!isCollapsed && (
                <div className="flex items-center space-x-2">
                  <div className="font-bold text-md">08:30 AM</div>
                  <div className="text-[#334155] text-xs font-semibold">Tue 20 Jan</div>
                </div>
              )}
              <div className="flex items-center justify-between mt-2 text-gray-500">
                <div className="flex items-center space-x-2 text-gray-500">
                  <Image
                    src={images.GlobeIcon}
                    alt="rightArrow"
                    className={`w-5 h-5 ${isCollapsed && 'ml-2'}`}
                  />
                  {!isCollapsed && (
                    <span className="text-[#334155] text-xs">
                      UTC: +5 hours
                    </span>
                  )}
                </div>
                {!isCollapsed && (
                  <Image
                    src={images.DropdownIcon}
                    alt="rightArrow"
                    className="w-5 h-5 mr-3"
                  />
                )}
              </div>
            </div>
          </div>
          <nav className="mt-8 space-y-2">
            <a
              href="#"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
            >
              <Image
                src={images.OrdersIcon}
                alt="rightArrow"
                className={`w-5 h-5 mr-3 ${isCollapsed && 'ml-2'}`}
              />
              {!isCollapsed && <span className="text-sm">Orders</span>}
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
            >
              <Image
                src={images.SubscriptionIcon}
                alt="rightArrow"
                className={`w-5 h-5 mr-3 ${isCollapsed && 'ml-2'}`}
              />
              {!isCollapsed && <span className="text-sm">Subscriptions</span>}
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
            >
              <Image
                src={images.CalendarIcon}
                alt="rightArrow"
                className={`w-5 h-5 mr-3 ${isCollapsed && 'ml-2'}`}
              />
              {!isCollapsed && <span className="text-sm">Calendar</span>}
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
            >
              <Image
                src={images.WaitlistIcon}
                alt="rightArrow"
                className={`w-5 h-5 mr-3 ${isCollapsed && 'ml-2'}`}
              />
              {!isCollapsed && <span className="text-sm">Waitlist</span>}
            </a>
          </nav>
        </div>
      </div>

      <div>
        <div className="text-gray-500 text-sm">
          {!isCollapsed && (
            <div className="flex justify-between items-center space-x-2 p-2 rounded-lg">
              <div className="flex space-x-2">
                <Image
                  src={images.DashboardIcon}
                  alt="rightArrow"
                  className="w-5 h-5"
                />
                <div className="text-md font-bold">Dashboard</div>
              </div>
              <Image
                src={images.ExportIcon}
                alt="rightArrow"
                className="w-5 h-5"
              />
            </div>
          )}
        </div>
        <div className="bg-white shadow-sm p-2 flex items-center justify-between rounded-lg">
          <Image
            src={images.AdminIcon}
            alt="rightArrow"
            className={`w-8 h-8 rounded-full ${isCollapsed && 'mb-2 ml-1'}`}
          />
          {!isCollapsed && (
            <div className="flex items-center m-4">
              <div>
                <div className="font-bold text-sm">Admin name</div>
                <div className="text-gray-500 text-xs">adminname@mail.com</div>
              </div>
            </div>
          )}
          {!isCollapsed && (
            <Image
              src={images.DropdownIcon}
              alt="rightArrow"
              className="w-5 h-5"
            />
          )}
        </div>
        <div className="text-gray-500 text-sm">
          <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
            <Image src={images.HelpIcon} alt="rightArrow" className={`w-5 h-5 ${isCollapsed && 'ml-2'}`} />
            {!isCollapsed && (
              <div>
                <div className="text-md font-bold">Help center</div>
                <div className="text-sm">©2024 Omniify.Inc</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
