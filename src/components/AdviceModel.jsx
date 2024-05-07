// import React from "react";
// import Image from "../assets/images/question.png";
// import { AwesomeButton } from "react-awesome-button";

// const AdviceModal = ({ isOpen, message, onClose, adviceData }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="fixed top-0 py-4 left-0 w-full h-full flex justify-center items-center bg-gray-800/50  z-50">
//       <div className="bg-white/80 p-4 rounded-2xl shadow-md max-h-full overflow-y-auto">
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-2xl font-bold mb-4">Advice</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {adviceData.map((advice, index) => (
//               <div key={index} className="bg-gray-100 p-4 rounded-lg">
//                 <h2 className="text-lg font-semibold mb-2">
//                   {advice.emotions}
//                 </h2>
//                 <p className="mb-2">
//                   <strong>Action:</strong> {advice.action}
//                 </p>
//                 <p className="mb-2">
//                   <strong>Advice:</strong> {advice.advice}
//                 </p>
//                 <p>
//                   <strong>Sentence:</strong> {advice.sentence}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdviceModal;





import React from "react";
import Image from "../assets/images/question.png";
import { AwesomeButton } from "react-awesome-button";
import { useNavigate } from "react-router-dom";

const AdviceModal = ({ isOpen, message, onClose, adviceData }) => {
    if (!isOpen) {
        return null;
    }

    const navigate = useNavigate();

    return (
        <div className="fixed top-0 py-4 left-0 w-full h-full flex justify-center items-center bg-gray-800/50  z-50">
            <div className="bg-white/80 p-4 rounded-2xl shadow-md max-h-full overflow-y-auto">
                <div className="container mx-auto px-4 py-8">
                    <AwesomeButton
                        type="primary"
                        onReleased={() => {
                            navigate("/");
                        }}
                        style={{
                            "--button-primary-color": "#ffbc05",
                            "--button-primary-color-dark": "#daa000",
                            "--button-primary-color-light": "#ffffff",
                            "--button-primary-color-hover": "#00cee9",
                            "--button-primary-color-active": "#00a5bb",
                            "--button-default-border-radius": "10px",
                            height: "40px",
                            marginRight: "10px",
                            width: "150px",
                            fontSize: "20px",
                            borderStyle: "solid",
                            borderRadius: "12px",
                            borderColor: "black",
                        }}
                    >
                        Home Page
                    </AwesomeButton>
                    <div className="flex justify-center items-center">
                        <div>
                    <h1 className="text-2xl font-bold mb-4">Advice</h1>
                    </div>
                    </div>
                    {adviceData.length < 1 ? (
                        <div className="flex justify-center items-center">
                        <div className="flex">
                            <div>Loading</div>
                            <div className="animate-spin" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {adviceData.map((advice, index) => (
                                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                                    <h2 className="text-lg font-semibold mb-2">
                                        {advice.emotions}
                                    </h2>
                                    <p className="mb-2">
                                        <strong>Action:</strong> {advice.action}
                                    </p>
                                    <p className="mb-2">
                                        <strong>Advice:</strong> {advice.advice}
                                    </p>
                                    <p>
                                        <strong>Sentence:</strong> {advice.sentence}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdviceModal;