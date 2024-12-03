import ContentWrapper from '@/components/contentWrapper/ContentWrapper'; // Importing the ContentWrapper component for consistent layout
import React from 'react'; // Importing React library for building components
import image from '../../../assets/home/work_1.svg'; // Image for the first step
import imag2 from '../../../assets/home/work_2.svg'; // Image for the second step
import imag3 from '../../../assets/home/work_3.svg'; // Image for the third step
import Image from 'next/image'; // Next.js optimized image component
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Font Awesome arrow icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome component for rendering icons
import line from '../../../assets/home/line.jpg'


// Define the data structure for each item
const items = [
    {
        title: "Registration",
        description: "Fill out our questionnaire to register for the program, then schedule your medical consultation.",
        image: image,
    },
    {
        title: "Consultation",
        description: "During your risk-free telehealth visit, a licensed clinician discusses your treatment goals and health history to determine if ketamine is appropriate for you, then customizes your prescription to meet your specific needs.",
        image: imag2,
    },
    {
        title: "Delivery",
        description: "Your Mindscape Rx kit arrives right at your doorstep in 3-5 business days. It contains detailed medication instructions, and you’ll be provided with 24/7 contact information.",
        image: imag3,
    }
];

const Works = () => {
    return (
        <div className='pt-[20px] pb-[60px] overflow-hidden relative'>
            <Image src={line} alt='' className='absolute w-[100%] top-[125px] hidden md:block' />

            {/* Wrapping the content with ContentWrapper for consistent layout */}
            <ContentWrapper>
                {/* Title for the "How It Works" section */}
                <h1 className='text-[45px] text-[#000000] text-center'>How It Works</h1>

                {/* Grid layout to display the steps in three columns on medium and larger screens */}
                <div className="grid md:grid-cols-3 gap-5 mt-12 relative">

                    {/* Loop through each step item to display it dynamically */}
                    {items.map((item, index) => (
                        <div className="box text-center" key={index}>
                            {/* Image section for each step */}
                            <div
                                className="image mb-[15px] mx-auto w-[110px] h-[110px] flex items-center justify-center rounded-full relative"
                                style={{ background: "linear-gradient(0deg, #ddfbdb 0%, #e5f1a7 100%)" }}
                            >
                                <Image src={item.image} alt={item.title} className='block mx-auto w-[60px] h-[60px]' />
                                <p className='w-[25px] h-[25px] rounded-full bg-[#1e9bd4] absolute text-[#ffffff] text-[14px] flex justify-center items-center left-[4px] top-[2px]'>
                                    <span>{index + 1}</span>
                                </p>
                            </div>

                            {/* Title for the step */}
                            <h2 className='text-[30px] text-[#000000]'>{item.title}</h2>

                            {/* Description for the step */}
                            <p className='text-[15px] text-[#848484] mt-3'>{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Call-to-action button asking if ketamine is right for the user */}
                <button className='group flex font-medium mx-auto gap-2 w-[300px] bg-black p-3 text-yellow-500 rounded-full text-center justify-center items-center transition-all duration-500 mt-10 border border-solid border-black hover:text-black hover:bg-[#ffffff]'>
                    Is Ketamine right for me?
                    {/* Arrow icon that rotates when hovered */}
                    <div>
                        <FontAwesomeIcon
                            icon={faArrowUp}
                            className='text-yellow-500 w-[14px] rotate-[45deg] duration-500 group-hover:text-black group-hover:bg-transparent'
                        />
                    </div>
                </button>
            </ContentWrapper>
        </div>
    );
};

export default Works;
