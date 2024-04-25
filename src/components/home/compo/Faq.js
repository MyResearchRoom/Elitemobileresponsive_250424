
import React, { useState } from 'react';
import Faqbg from "../../../assets/projectCarousel/Faq.jpeg"
const Faq = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const data = [
        {
            label: "Label 1",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            label: "Label 2",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            label: "Label 3",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            label: "Label 4",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className='w-full p-6' style={{ backgroundImage: `url(${Faqbg})`, backgroundSize: 'cover' }}>
            
            <div className="sm:w-[700px] p-4 relative sm:left-[50px] mt-10" >
            <h1 className='text-white mb-6 font-semibold sm:text-3xl text-xl'>FAQ</h1>
            {data.map((item, index) => (
                <div key={index} className="border-b border-white text-white mb-4">
                    <div className="flex justify-between items-center cursor-pointer p-4" onClick={() => toggleAccordion(index)}>
                        <h2 className="text-lg font-semibold">{item.label}</h2>
                        <svg
                            className={`w-6 h-6 transition-transform transform ${openAccordion === index ? 'rotate-180' : 'rotate-0'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    {openAccordion === index && (
                        <div className="p-4  border-gray-300" >
                            <p className="text-[18px}">{item.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
        <div className=''>
            <ul className='flex text-white float-right p-2 text-2xl gap-5'>
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-x-twitter"></i></li>
                <li><i class="fa-brands fa-linkedin"></i></li>
                <li><i class="fa-solid fa-link"></i></li>
            </ul>
        </div>
        </div>
    );
};

export default Faq;
