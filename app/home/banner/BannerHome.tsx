// Import React for creating components
import React from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Font Awesome icons for checkmarks and arrows
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome component for rendering icons
import Image from "next/image";
import logo from '../../../assets/logo_half.png'
import text from '../../../assets/home/text.png'

// Functional component for the banner/hero section
const BannerHome = () => {
    return (
        <div className='overflow-hidden'>
            {/* Hero section with a full-screen fixed background image */}
            <section
                className="relative h-[110vh] bg-cover bg-center"
                style={{ backgroundImage: 'url(/background/home.jpg)' }} // Inline style for background image
            >
                {/* Semi-transparent overlay for darkening the background */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <Image src={logo} alt="Logo" className="hidden md:block md:w-[180px] absolute top-1/2 right-[25%] opacity-40 transform -translate-x-1/2 -translate-y-1/2" />

                {/* Content container positioned relative to overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end mb-[30px] text-white px-4 pb-[90px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
                    <div className="flex justify-between flex-col md:flex-row md:gap-[200px] md:items-end w-full max-w-[1300px] mx-auto px-5 py-3 xl:px-0 xl:py-4">

                        <div >
                            <h1 className="text-[35px] md:text-[50px] leading-[1.3] font-medium text-transparent bg-clip-text bg-[#ffffff]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                                Change Your <br />
                                Mental Landscape <br />
                                <Image src={text} alt='' className='w-[470px] relative left-[-6px] top-[-2px]' />

                            </h1>
                        </div>

                        <div className='flex-1'>
                            <p>Our at-home ketamine program helps radically shift your perspective so you can reclaim your true power.</p>
                            <button className='group flex font-bold gap-2 hover:gap-5 w-[250px] bg-gradient-to-r from-blue-500 to-green-500  p-3 text-[#ffffff] rounded-full text-center justify-center items-center transition-all duration-500  mt-5 hover:bg-[#ffffff]'>
                                Start your journey
                                <div>
                                    <FontAwesomeIcon
                                        icon={faArrowUp}
                                        className='text-[#ffffff] w-[14px] rotate-[45deg] duration-500'
                                    />
                                </div>
                            </button>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

// Export the component as default

export default BannerHome;
