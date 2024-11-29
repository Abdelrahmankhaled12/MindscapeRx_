import {
    ContentWrapper,
    Header,
    Footer,
    Effect,
} from '../components';  // Importing components from the components directory
import Link from 'next/link';
import type { Metadata } from "next";


/**
 * NotFoundPage Component
 * This component renders a 404 Not Found page with a message and a button to navigate back to the homepage.
 */

export const metadata: Metadata = {
    title: "404 Not Found",
};

const Custom404 = () => {

    return (
        <Effect>
            <div className="py-[80px]"> 
                <ContentWrapper>
                    <div className="relative top-[-20px]">
                        <h1 className="text-[#007bff] text-center text-[170px] text-primary font-bold mb-[50px]">404</h1>  {/* 404 error code */}
                        <div className="relative top-[-60px] leading-6 text-center">
                            <h2 className="mt-0 text-[27px] text-black sm:text-[50px]">Nothing to see here!</h2>
                            <p className="mx-auto mt-5 text-black text-[20px] font-semibold sm:w-[820px]">The page you are looking for may have been moved or no longer exists, if you wish you can return to our home page.</p>
                            <Link className="mt-6 block w-[220px] py-[20px] bg-[#007bff] text-white text-[22px] font-semibold rounded-[10px] border-2 border-[#007bff] transition duration-500 ease-in-out hover:bg-white hover:text-[#007bff] px-[35px] mx-auto" href={"/"}>
                                Home Page
                            </Link>
                        </div>
                    </div>
                </ContentWrapper>
            </div>
        </Effect>
    );
};

export default Custom404;
