import Navbar from "./compo/Navbar";
// import elite_profile from "../../assets/Images/Elite_profile.jpeg"
import elite_profile from "../../assets/Images/Elite_profile.png"
import elite_profile_small from "../../assets/Images/Elite_profile_small.png"
import { useEffect } from "react";
import Typed from "typed.js";
import Scroll from "./compo/Scroll";
import TrustedBy from "./compo/TrustedBy";
import Services from "./compo/Services";
import Testimonial from "./compo/Testimonial";
import ProjectCarousel from "./compo/ProjectCarousel";
import Faq from "./compo/Faq"
function Home() {

useEffect(() => {
    const textElement = document.querySelector(".text");
    if (textElement) {
      // Initialize Typed instance after component is mounted
      const typed = new Typed(".text", {
        strings: ["imagined", "imagined", "imagined"],
        typeSpeed: 50,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
        
      });
  
      return () => {
        typed.destroy();
      };
    }
  }, []);
  

  return (
    <div className=" overflow-hidden  h-auto sm:w-full flex flex-col items-center relative object-cover object-center ">

      <div className="absolute sm:top-[250px] sm:left-[300px] top-[280px] left-[170px]  transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-4/5 sm:w-[550px] sm:h-[150px] text-3xl sm:text-6xl font-semibold ">
        <h2>Engineering Design</h2>
        <h2>Simulation Services</h2>
        <h2 className="md:float-left relative md:left-4 right-[44px]">
          Re<span className="text text-blue-600">imagined</span>
        </h2>
      </div>



      <img
        src={elite_profile} // Use large image for desktop
        className="object-cover object-center sm:w-full sm:h-full h-[100vh] w-full flex justify-center items-center hidden md:block" // Hide image on small screens
        alt="Elite Profile"
        style={{
          boxShadow: "41px -25px 25px 67px rgba(0,0,0,0.67) inset,0px -36px 30px 0px rgba(0,0,0,0.15) inset,0px -79px 40px 0px rgba(0,0,0,0.1) inset,0px 2px 1px 0px rgba(0,0,0,0.06),0px 4px 2px 0px rgba(0,0,0,0.09),0px 8px 4px 0px rgba(0,0,0,0.09),0px 16px 8px 0px rgba(0,0,0,0.09);",
        }}
      />

      <img
        src={elite_profile_small} // Use small image for mobile
        className="object-cover object-center sm:w-full sm:h-full h-[68vh] w-full flex justify-center items-center md:hidden" // Hide image on large screens
        alt="Elite Profile"
        style={{
          boxShadow: "41px -25px 25px 67px rgba(0,0,0,0.67) inset,0px -36px 30px 0px rgba(0,0,0,0.15) inset,0px -79px 40px 0px rgba(0,0,0,0.1) inset,0px 2px 1px 0px rgba(0,0,0,0.06),0px 4px 2px 0px rgba(0,0,0,0.09),0px 8px 4px 0px rgba(0,0,0,0.09),0px 16px 8px 0px rgba(0,0,0,0.09);",
        }}
      />



      <div className="bg-black  w-full " >
      <h1 className="font-semibold text-white sm:text-3xl text-xl mt-4 mb-4 ml-5 sm:ml-[100px]">Trusted By</h1>
      <Scroll/>
      </div>
      <TrustedBy />
      <Services/>
      <Testimonial/>
      <ProjectCarousel />
      <Faq/>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;



