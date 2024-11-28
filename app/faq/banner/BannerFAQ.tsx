import Image from "next/image";
import logo from '../../../assets/logo_half.png'


// Functional component for the FAQ banner/hero section
const BannerFAQ = () => {
    return (
        <div>
            {/* Hero section with a full-screen fixed background image */}
            <section
                className="relative bg-fixed h-[90vh] md:h-[100vh] bg-cover bg-bottom md:bg-top" // Classes for background styling
                style={{ backgroundImage: 'url(/background/faq.jpg)' }} // Inline style for setting the background image
            >
                {/* Semi-transparent overlay for darkening the background */}
                <div className="absolute inset-0 bg-[#00000023]"></div>
                <Image src={logo} alt="Logo" className=" absolute top-1/2 left-1/2 opacity-60 transform -translate-x-1/2 -translate-y-1/2" />

                {/* Content container positioned above the overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end mb-[30px] text-white px-4 pb-[60px]">
                    {/* Centered content container with padding and width control */}
                    <div className='w-full max-w-[1400px] mx-auto px-5 py-3 xl:px-0 xl:py-4'>
                        {/* Heading with a mix of white text and gradient text */}
                        <h1 className="text-[40px]  md:text-[70px] font-bold text-transparent bg-clip-text bg-[#ffffff]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                            Frequently Asked <span className="bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">Questions</span>
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BannerFAQ;
