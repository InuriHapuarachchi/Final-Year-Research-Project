import React from "react";
import { useNavigate } from "react-router-dom";

function Box({ topic, svg, subTopic, color, onClick }) {
  let navigate = useNavigate();


  return (
    <div>
      <div
        className="hover:scale-105 transition-transform bg-slate-0 pb-0 "
        onClick={() => navigate(onClick)}
      >
 
            <div className="hover:text-black ">
                <div className={`h-64 w-64 mt-4 xl:mb-10 lg:mb-5 md:mb-2 sm:mb-10 mr- ml- duration-300 text-white rounded-lg ${color}`}>
                    <div className="pt-6 pl-6 pb-2 h-24 w-24 text-gray-700">{svg}</div>
                    <div className="text-4xl  pl-8">{topic}</div>
                    <div className="pl-8 pr-4 text-gray-900">
                    {subTopic}
                    </div>
                </div>          
            </div>
      </div>
    </div>
  );
}

export default Box;
