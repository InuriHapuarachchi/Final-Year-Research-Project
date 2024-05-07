// import React from "react";
// import Box from "./Box";
// import Imagee from '../../assets/images/selectionBG.jpg'
// import image1 from '../../assets/images/selectionPage/aaa.png'
// import image2 from '../../assets/images/selectionPage/ss.png'
// import image3 from '../../assets/images/selectionPage/sm.png'

// export default function MainBoxes() {
//   return (
//     <>
//       {/* <div className="flex flex-col items-center md:justify-center h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${Image})` }}> */}
//       <div className="flex flex-col items-center md:justify-center h-screen" >
//         <div className="flex flex-col md:flex-row gap-4 md:gap-8">
//           <Box
//             onClick={"/FamilyQuiz"}
//             color={"bg-lime-400"}
//             subTopic={"Click me to get some questions about your family"}
//             topic={"Family"}
//             svg={image1}
//           />
//           <Box
//           onClick={"/SchoolQuiz"}
//           color={"bg-orange-300"}
//             subTopic={"I will ask few questions about your School"}
//             topic={"School"}
//             svg={image2}
//           />
//           <Box
//           onClick={"/SocialQuiz"}
//           color={"bg-pink-300"}
//             subTopic={"Lets answer some questions about your Social side ya?"}
//             topic={"Social"}
//             svg={image3}
//           />
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";
import Box from "./Box";
import Imagee from '../../assets/images/selectionBG.jpg'
import image1 from '../../assets/images/selectionPage/aaa.png'
import image2 from '../../assets/images/selectionPage/ss.png'
import image3 from '../../assets/images/selectionPage/sm.png'
 
export default function MainBoxes() {
  return (
    <>
      {/* <div className="flex flex-col items-center md:justify-center h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${Image})` }}> */}
      <div className="flex flex-col mt-20" >
        <div className="flex flex-col md:flex-row h-full w-full justify-center  gap-8">
              <Box
            onClick={"/FamilyQuiz"}
            color={"bg-green-300"}
            subTopic={"Click me to get some questions about your family"}
            topic={"Family"}
            svg={image1}
          />
          <Box
          onClick={"/SchoolQuiz"}
          color={"bg-orange-200"}
            subTopic={"Lets answer some questions that are related to your school"}
            topic={"School"}
            svg={image2}
          />
          <Box
          onClick={"/SocialQuiz"}
          color={"bg-pink-200"}
            subTopic={"Lets answer some questions about your Social side ya?"}
            topic={"Social"}
            svg={image3}
          />
        </div>
      </div>
    </>
  );
}
 
 