import React from "react";
import { useLocation } from "react-router-dom";
const ProjDetails = () => {
  const location = useLocation();
  const { data } = location.state;
  return (
    <div className="h-auto w-full bg-black">
      <div
        className="relative lg:w-[530px] w-[200px] md:w-[300px]   h-[100vh]   bg-gray-900"
        style={{ backgroundColor: "rgba(36, 40, 52, 1)" }}
      >
        <div className="lg:w-[80vw] w-[50vw] h-[60%] lg:flex lg:flex-row md:flex-col absolute sm:top-[100px] top-[30px] sm:left-[200px]  left-[80px] gap-10">
          <div className=" lg:w-[50%] lg:h-full  md:h-[270px] w-full ">
            <img src={data.img} alt="Image" className="w-full h-full" />
          </div>
          <div className="lg:w-[50%] w[full] sm:h-[full] text-white">
            <p className="sm:text-4xl text-2xl font-semibold mb-2 ">
              {data.title}
            </p>
            <p className="sm:text-xl text-[18px] lg:mb-10 mb-2">
              Enhancing Value Through Optimised Engineering Solutions
            </p>
            <p className="text-base">{data.mainparagraph}</p>
          </div>
        </div>
      </div>

     


        {
          data.details ? (
            <div className="h-auto w-full bg-black ">
                <div className="lg:w-[65%] ml-[50px] mb-5 mt-10 sm:ml-[200px]">
                    <p className="text-white sm:text-5xl text-2xl">{data.title}</p>
                </div>

                <div className="flex ">
                    <div className="w-[85%]">
                        {
                          data.details.map((val,ind)=>{
                            return(
                            <>
                                 <div key={ind}  className="md:flex lg:h-[400px] sm:w-auto md:w-auto  gap-2 relative sm:left-[150px] sm:ml-10 ml-[40px] mb-10 p-2">
                                    <p className="text-white text-[18px] text-justify lg:w-[50%] sm:mb-0 mb-4 custom-scrollbar scrollbar-hide mr-2" style={{overflowY: "auto",scrollbarWidth: "thin",scrollbarColor: 'transparent transparent',}}>{val.description}</p>
                                    <div className="h-full lg:w-[50%] mb-4">
                                    <img
                                        src={val.img}
                                        alt="Image"
                                        className="w-full h-full mb-4"/>
                                    </div>
                                </div>
                            </>
                          )
                          })
                        }
                    </div>
                    <div className=" sm:w-[530px] h-auto float-right " style={{ backgroundColor: "rgba(36, 40, 52, 1)" }}></div>

                </div>
            </div>
          ):(
            <>

            </>
          )
        }
    </div>
  );
};

export default ProjDetails;
