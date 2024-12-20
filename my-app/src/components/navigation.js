import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "./images/dash_white.png";
import editIcon from "./images/edit_white.png";
import chartIcon from "./images/chart_white.png";
import bulbIcon from "./images/bulb_white.png";
import cloudIcon from "./images/Brainstorm.png";
import kunai from "./images/kunai.png";

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation(); // Get the current location
  const [activeItem, setActiveItem] = useState(null);

  // Map paths to items
  const pathToItemMap = {
    "/dashboard": { key: "dashboard", label: "Dashboard", icon: homeIcon },
    "/brainstorm": { key: "brainstorm", label: "Brainstorm", icon: cloudIcon },
    "/editor": { key: "editor", label: "Editor", icon: editIcon },
    "/scheduler": { key: "scheduler", label: "Scheduler", icon: bulbIcon },
    "/analytics": { key: "analytics", label: "Analytics", icon: chartIcon },
  };

  // Update active item on path change
  useEffect(() => {
    setActiveItem(pathToItemMap[location.pathname]?.key);
  }, [location]);

  return (
    <div
      className="pl-6 pt-6 pb-6 cursor-none"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div
        className={`bg-gray-900 text-white h-72 transition-all duration-300 ${
          isExpanded ? "w-64" : "w-14"
        } relative z-10`}
        style={{
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "40px",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "40px",
        }}
      >
        <div
          className={`flex items-center border-b border-gray-700 py-3 ${
            isExpanded ? "justify-start px-4" : "justify-center"
          }`}
        >
          {!isExpanded && (
            <div className="bg-indigo-500 rounded-lg h-10 w-10 flex items-center justify-center">
              <img src={kunai} alt="Kunai Icon" className="h-8 w-8" />
            </div>
          )}

          {isExpanded && (
            <span
              className={`text-2xl font-bold flex items-center justify-center whitespace-nowrap transition-all duration-300 h-10 ${
                isExpanded ? "opacity-100" : "opacity-0 w-0 hidden"
              }`}
            >
              Ninja Schedule
            </span>
          )}
        </div>

        <nav className="mt-3">
          <ul className="space-y-4">
            {Object.values(pathToItemMap).map(({ key, label, icon }) => (
              <li
                key={key}
                className={`flex items-center px-4 rounded-lg transition-colors duration-300 group ${
                  activeItem === key ? "text-yellow-500" : "hover:text-white"
                }`}
              >
                {activeItem === key ? (
                  // Render a span for the active page
                  <span className="flex items-center w-full">
                    <img
                      src={icon}
                      alt={`${label} Icon`}
                      className="h-6 w-6 transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <span
                      className={`whitespace-nowrap transition-all duration-300 ${
                        isExpanded ? "opacity-100 ml-3" : "opacity-0 w-0"
                      }`}
                    >
                      {label}
                    </span>
                  </span>
                ) : (
                  // Render a clickable Link for non-active pages
                  <Link
                    to={`/${key}`}
                    className="flex items-center w-full group-hover:font-bold"
                  >
                    <img
                      src={icon}
                      alt={`${label} Icon`}
                      className="h-6 w-6 transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <span
                      className={`whitespace-nowrap transition-all duration-300 ${
                        isExpanded ? "opacity-100 ml-3" : "opacity-0 w-0"
                      }`}
                    >
                      {label}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
