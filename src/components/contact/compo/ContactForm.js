
import React from 'react';
import call from "../../../assets/Contact/call.png";
import email from "../../../assets/Contact/email.png";
import location from "../../../assets/Contact/location.png";  
import Twitter from "../../../assets/Contact/Twitter.png";
import Insta from "../../../assets/Contact/Insta.png";
import Game from "../../../assets/Contact/Game.png";

const ContactForm = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-between items-center bg-white'>
      <div className='flex flex-col sm:flex-row sm:h-[500px] sm:w-[80%] w-[90%] border mb-2'>

        {/* ***** Right ***** */}
        <div className='sm:w-3/5 flex flex-col justify-between sm:order-2 bg-white'>
          <div className="flex flex-col gap-5 justify-center items-center sm:h-[200px] sm:mb-0 mb-2">
            <div className="sm:flex gap-5 sm:w-full w-[81%] justify-between sm:px-6 mt-10">
              <div className='sm:mb-0 mb-4'>
                <label className='text-[18px]'>First Name</label> <br/>
                <input type="text" className='border-b-2 outline-none w-full' />
              </div>
              <div>
                <label className='text-[18px]'>Last Name</label> <br/>
                <input type='text' className='border-b-2 outline-none w-full ' />
              </div>
            </div>
            <div className="sm:flex gap-5 sm:w-full w-[81%] justify-between sm:px-6">
                <div className='sm:mb-0 mb-4'>
                    <label className='text-[18px]'>Email</label> <br/>
                    <input type="email" className='border-b-2 outline-none w-full ' />
                </div>
                <div>
                    <label className='text-[18px]'>Phone No</label> <br/>
                    <input type='text' className='border-b-2 outline-none w-full ' />
                </div>
            </div>
          </div>

          <div className='flex flex-col justify-evenly h-[300px] '>
            <div className='w-[81%] justify-between px-6'>
                <p className='text-[18px]'>Select Subject ?</p>
            </div>
            <div className="flex gap-5 w-full justify-between px-6 text-sm ">
              <label className='text-[16px]'><input type="radio" name="subject" value="option1" /> Inquiry</label>
              <label className='text-[16px]'><input type="radio" name="subject" value="option2" /> Careers</label>
              <label className='text-[16px]'><input type="radio" name="subject" value="option3" /> Quotation</label>
              <label className='text-[16px]'><input type="radio" name="subject" value="option4" /> Services</label>
            </div>
            <div className='w-full justify-between px-6 mt-4'>
                <p className='text-[18px]'>Message</p>
                <input placeholder='Write Your Message' className='border-b mt-4  outline-none sm:w-full w-full'/>
            </div>
            <div className='w-full justify-between px-6'>
              <button className='border float-right p-2 bg-blue-500 text-white rounded-full w-[170px] sm:w-[150px]'>Send Message</button>
            </div>
          </div>
        </div>

        {/* ***** Left ***** */}
        <div className='sm:w-2/5 sm:h-full h-[350px] flex flex-col justify-around  p-6 sm:order-1' style={{backgroundColor:"rgba(36, 40, 52, 1)"}}>
          <div>
            <h1 className='md:text-3xl text-xl font-semibold text-white mb-2'>Contact Information</h1>
            <p className='text-gray-300 sm:text-[18px] text-[16px]'>Say something to start a live chat!</p>
          </div>
          <div className='sm:w-[80%] h-[150px] sm:flex sm:flex-col sm:justify-between text-gray-300 '>
            <div className='flex h-[20px] gap-10 mb-2 sm:mb-4 '>
              <img src={call} className='sm:h-[30px]' />
              <p>808-276-3379</p>
            </div>
            <div className='flex h-[20px] gap-10 mb-2  sm:mb-4'>
              <img src={email} className='sm:h-[30px] ' />
              <p>projects@elitecengg.com</p>
            </div>
            <div className='flex h-[20px] gap-10 mb-2 sm:mb-4'>
              <img src={location} className='sm:h-[30px]' />
              <p>52, Jansukh Apt., Kasturba Rd. Kandivali W, Mumbai-67</p>
            </div>
          </div>
          <div className='flex gap-5'>
            <img src={Twitter} className='h-[20px]'/>
            <img src={Insta}  style={{ filter: 'invert(100%)'}} className='h-[20px]'/>
            <img src={Game} className='h-[20px]'/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;
