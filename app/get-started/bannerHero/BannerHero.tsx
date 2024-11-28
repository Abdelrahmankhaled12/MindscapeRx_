// Import React for creating components
import React from 'react';
import logo from '../../../assets/logo_only.png'
import Image from 'next/image';
// Functional component for the banner/hero section
const BannerHero = () => {
    return (
        <div className='overflow-hidden'>
            {/* Hero section with a full-screen fixed background image */}
            <section
                className="relative h-[85vh] bg-cover bg-center"
                style={{ backgroundImage: 'url(/background/get-started.jpg)' }} // Inline style for background image
            >
                {/* Semi-transparent overlay for darkening the background */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <Image src={logo} alt="Logo" className="w-32 md:w-64 absolute top-1/2 left-1/2 opacity-20 transform -translate-x-1/2 -translate-y-1/2" />

                {/* Content container positioned relative to overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end mb-[30px] text-white px-4 pb-[60px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
                    {/* Inner container for centering and styling content */}
                    <div className='w-full max-w-[1400px] mx-auto px-5 py-3 xl:px-0 xl:py-4'>
                        {/* Heading with gradient text */}
                        <h1 className="text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-yellow-600">
                            Get Started
                        </h1>
                        {/* Subtitle text */}
                        <p className="text-[17px] sm:w-[550px] leading-[1.8]">
                            Congratulations! You&apos;ve chosen a new path that can help you feel better and embrace life more fully.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Export the component as default

export default BannerHero;
