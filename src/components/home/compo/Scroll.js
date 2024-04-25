
import React, { useEffect, useRef } from 'react';


import first from "../../../assets/firstImage.png"
import second from "../../../assets/bajaj.png";
import third from "../../../assets/godrej.png";
// import fourth from "../../../assets/paras.png";
import fifth from "../../../assets/raja.png";
import sixth from "../../../assets/skipper.png";
import seventh from "../../../assets/tata.png";
import "./Scroll.css"
const Scroll = () => {
 

  return (
    <div className="flex bg-black sm:w-full " style={{overflow:"hidden",whiteSpace:"nowrap",}}>
        
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className='animation-scroll  sm:h-[150px]' >
        <div style={{height:"100px ",width:"150px"}}><img src={first} alt="First" className='' /></div>
        <div style={{height:"100px ",width:"150px"}}><img src={second} alt="Second" className="" /></div>
        <div style={{height:"100px ",width:"150px"}}><img src={third} alt="Third" className="" /></div>
        <div style={{height:"100px ",width:"150px"}}><img src={fifth} alt="Fifth" className="" /></div>
        <div style={{height:"100px ",width:"150px"}}><img src={sixth} alt="Sixth" className="" /></div>
        <div style={{height:"100px ",width:"150px"}}><img src={seventh} alt="Seventh" className="" /></div>
      </div>

      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className='  animation-scroll sm:h-[150px]' >
        <div style={{height:"100px",width:"150px"}}><img src={first} alt="First" className='' /></div>
        <div style={{height:"100px",width:"150px"}}><img src={second} alt="Second" className="" /></div>
        <div style={{height:"100px",width:"150px"}}><img src={third} alt="Third" className="" /></div>
        <div style={{height:"100px",width:"150px"}}><img src={fifth} alt="Fifth" className="" /></div>
        <div style={{height:"100px",width:"150px"}}><img src={sixth} alt="Sixth" className="" /></div>
        <div style={{height:"100px",width:"150px"}}><img src={seventh} alt="Seventh" className="" /></div>
      </div>
    </div>
  );
};

export default Scroll;


// import React from 'react';
// import first from "../../../assets/firstImage.png";
// import second from "../../../assets/bajaj.png";
// import third from "../../../assets/godrej.png";
// import fourth from "../../../assets/paras.png";
// import fifth from "../../../assets/raja.png";
// import sixth from "../../../assets/skipper.png";
// import seventh from "../../../assets/tata.png";
// import "./Scroll.css";

// const Scroll = () => {
//   return (
//     <div className="flex bg-black sm:p-[60px 0px] overflow-hidden">
//       <div className="scroll-container">
//         <img src={first} alt="First" className="scroll-item" />
//         <img src={second} alt="Second" className="scroll-item" />
//         <img src={third} alt="Third" className="scroll-item" />
//         <img src={fourth} alt="Fourth" className="scroll-item" />
//         <img src={fifth} alt="Fifth" className="scroll-item" />
//         <img src={sixth} alt="Sixth" className="scroll-item" />
//         <img src={seventh} alt="Seventh" className="scroll-item" />
//       </div>

//       <div className="scroll-container">
//         <img src={first} alt="First" className="scroll-item" />
//         <img src={second} alt="Second" className="scroll-item" />
//         <img src={third} alt="Third" className="scroll-item" />
//         <img src={fourth} alt="Fourth" className="scroll-item" />
//         <img src={fifth} alt="Fifth" className="scroll-item" />
//         <img src={sixth} alt="Sixth" className="scroll-item" />
//         <img src={seventh} alt="Seventh" className="scroll-item" />
//       </div>
//     </div>
//   );
// };

// export default Scroll;
