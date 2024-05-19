import React, { useState } from "react";
import TopBar from "../Home/TopBar";
import ReportTable from "./ReportTable";
import EmoReports from "./EmoReports";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const sidebarNames = ["Subject Reports", "Emotion Reports", "Profiles", "Contact"]; // Define sidebar names here

function MainAssignment() {
  const [selectedName, setSelectedName] = useState(sidebarNames[0]); // State to keep track of selected sidebar name

  const handleSidebarClick = (name) => {
    setSelectedName(name);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-amber-400 h-screen pt-10 fixed left-0 top-0">
        {sidebarNames.map((name, index) => (
          <div
            key={index}
            className={`p-4 cursor-pointer ${
              selectedName === name ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleSidebarClick(name)}
          >
            {name}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="ml-64">
        <div>
         
         {selectedName == "Home" && "home"}
         {selectedName == "Emotion Reports" && <EmoReports />}
         {selectedName == "Profiles" && <ReportTable />}
          
        </div>
      </div>
    </div>
  );
}

export default MainAssignment;
