import { ContentWrapper } from '@/components'; // Importing ContentWrapper component for consistent layout
import React from 'react'; // Importing React library

const WhyLose = () => {
    return (
        <div className="pt-[30px] pb-[60px] bg-[linear-gradient(1deg,_#a0d8ff54,_#a0d8ff54,_#ffffff)] overflow-hidden" >
            {/* Main container with padding and gradient background */}
            <ContentWrapper>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    {/* Background section with a custom image */}
                    <div
                        className="bg-no-repeat bg-auto py-[60px] px-[30px] rounded-[20px]"
                        style={{
                            backgroundImage: 'url(/background/section-whylose.jpg)', // Inline style for background image
                            backgroundPosition: "bottom left", // Adjust background position
                        }}
                    >
                        <div className="max-w-[500px]">
                            {/* Text content */}
                            <h1 className="text-[25px] sm:text-[40px] font-bold text-transparent bg-clip-text bg-[#ffffff] mb-[15px]">
                                Why <span className="bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">lower-dose</span> ketamine?
                            </h1>
                            {/* Description text */}
                            <p className="mb-6 text-[#ffffffe0] leading-[1.7] text-[16px]">
                                Unlike high-dose ketamine, low and mid-range dosages provide immediate, tangible therapeutic benefits without intense psychoactive effects, such as hallucinations. Mindscape Rx connects you with an experienced provider who prescribes a personalized dose to meet your specific needs.
                            </p>
                            <p className="mb-4 text-[#ffffffe0] leading-[1.7] text-[16px]">
                                With Mindscape Rx, you don’t need supervision when you administer the ketamine treatment. Because the effects are subtle, you can experience the benefits of ketamine therapy as needed, at almost any location or time of day, and use it to address symptoms in the moment.
                            </p>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default WhyLose;
