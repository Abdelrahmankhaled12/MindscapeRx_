import Image from "next/image";
import logo from '../../../assets/logo_only.png'

// Functional component for the Seience banner/hero section
const BannerScience = () => {
    return (
        <div>
            {/* Hero section with a full-screen fixed background image */}
            <section
                className="relative overflow-hidden h-[70vh] bg-cover bg-bottom md:bg-center" // Classes for background styling
                style={{ backgroundImage: 'url(/background/science.jpg)' }} // Inline style for setting the background image
            >
                {/* Semi-transparent overlay for darkening the background */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <Image src={logo} alt="Logo" className="w-32 md:w-64 absolute top-1/2 left-1/2 opacity-20 transform -translate-x-1/2 -translate-y-1/2" />

                {/* Content container positioned above the overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end mb-[30px] text-white px-4 pb-[40px]">
                    {/* Centered content container with padding and width control */}
                    <div className='w-full max-w-[1400px] mx-auto px-5 py-3 xl:px-0 xl:py-4'>
                        {/* Heading with a mix of white text and gradient text */}
                        <h1 className="text-[35px] sm:text-[50px] md:text[60px] font-bold text-transparent bg-clip-text bg-[#ffffff]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                            Unlock The <span className="bg-clip-text bg-gradient-to-r from-[#04fe5f] to-yellow-400">Power </span> Of Ketamine.
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BannerScience;
