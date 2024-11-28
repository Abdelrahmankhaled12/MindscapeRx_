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
            <Header />
            <div className="py-0 pb-12"> {/* Replacing .notFoundPage styles */}
                <ContentWrapper>
                    <div className="relative top-[-20px]">
                        <h1 className="text-center text-[170px] text-primary font-bold">404</h1>  {/* 404 error code */}
                        <div className="relative top-[-60px] leading-6 text-center">
                            <h2 className="mt-0 text-[27px] text-black sm:text-[50px]">Nothing to see here!</h2>
                            <p className="mx-auto mt-5 text-black text-[20px] font-semibold sm:w-[820px]">The page you are looking for may have been moved or no longer exists, if you wish you can return to our home page.</p>
                            <Link className="mt-6 block bg-primary text-white text-[22px] font-semibold h-[60px] rounded-[10px] border-2 border-primary transition duration-500 ease-in-out shadow-lg hover:bg-white hover:text-primary px-[35px] py-[12px]" href={"/"}>
                                Home Page
                            </Link>
                        </div>
                    </div>
                </ContentWrapper>
            </div>
            <Footer />
        </Effect>
    );
};

export default Custom404;
