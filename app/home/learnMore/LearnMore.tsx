import Image from 'next/image'; // Importing Next.js optimized Image component for better performance
import React from 'react'; // React library for building components
import image from '../../../assets/home/home-3.jpg'; // Importing the image to display alongside text
import ContentWrapper from '@/components/contentWrapper/ContentWrapper'; // Importing ContentWrapper for consistent layout styling
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Font Awesome icon for arrows
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome component for rendering icons

// LearnMore functional component
const LearnMore = () => {
    return (
        <div className="py-6 bg-cover bg-center  overflow-hidden" 
             style={{ backgroundImage: 'url(/background/learnMore.png)' }} // Inline style for background image
        >
            <ContentWrapper>
                {/* Container for the content with responsive layout */}
                <div className="grid sm:grid-cols-[1fr_1.5fr] flex-col md:flex-row justify-center items-center gap-8 max-w-[900px] mx-auto">
                    
                    {/* Left side: Image */}
                    <div className="image">
                        <Image
                            src={image}
                            alt="Low-dose ketamine"
                            className="rounded-[50%] mx-auto sm:ml-auto w-[260px] h-[260px] object-cover" // Circular image with fixed size
                        />
                    </div>
                    
                    {/* Right side: Text and button */}
                    <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
                        {/* Descriptive text */}
                        <p className="text-[#ffffffee] text-[21px] leading-[1.8]">
                            MindscapeRx specializes in delivering safe, effective low-dose ketamine treatments for individuals facing depression, anxiety, PTSD, and other mental health concerns.
                        </p>
                        
                        {/* Call-to-action button */}
                        <button className='group flex font-bold gap-2 w-[180px] bg-transparent p-3 text-[#ffffff] rounded-full text-center justify-center items-center transition-all duration-500 mt-4 border border-solid border-[#ffffff5d] hover:text-black hover:bg-[#ffffff]'>
                            Learn More
                            <div>
                                <FontAwesomeIcon
                                    icon={faArrowUp} // Arrow icon
                                    className='text-[#ffffff] w-[14px] rotate-[45deg] duration-500 group-hover:text-black group-hover:bg-transparent'
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
}

export default LearnMore;
