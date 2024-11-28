// Import necessary components and assets
import Image from 'next/image'; // Next.js optimized image component
import Link from 'next/link'; // Next.js link component for client-side navigation
import ContentWrapper from '../contentWrapper/ContentWrapper'; // Wrapper for consistent layout
import logo from '../../assets/logoAndText.png'; // Company logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome for social media icons
import { faFacebookF, faGooglePlusG, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Social media icons
import Copyrights from './Copyrights'; // Footer copyrights section
import { EXPLORE_ITEMS, MINDSCAPE_ITEMS } from '@/constants'; // Navigation constants
import JoinBox from './JoinBox'; // JoinBox component for newsletter or user interaction

// Define the Footer component
const Footer: React.FC = () => {
    return (
        <footer className="text-[#ffffff] pt-[40px]">
            <ContentWrapper>
                {/* Footer content organized into a grid layout */}
                <div className="grid sm:grid-cols-[1fr_1fr] md:grid-cols-[2fr_1fr_1fr_2.5fr] gap-10 mb-10">
                    {/* Logo and social media section */}
                    <div>
                        {/* Display company logo */}
                        <Image
                            src={logo}
                            alt="MindscapeRx Logo"
                            className="mb-1 mx-auto"
                        />
                        {/* Social media icons */}
                        <div className="flex items-center justify-center gap-4">
                            {[
                                { icon: faFacebookF, link: "" },
                                { icon: faGooglePlusG, link: "" },
                                { icon: faYoutube, link: "" },
                                { icon: faLinkedinIn, link: "" },
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.link}
                                    className="w-[40px] h-[40px] bg-[#bababa3b] flex justify-center items-center text-[17px] rounded-full text-[#000000b3] duration-500 hover:text-yellow-500 hover:bg-black"
                                >
                                    <FontAwesomeIcon icon={social.icon} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Explore section */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-black">Explore</h4>
                        <ul className="space-y-3">
                            {EXPLORE_ITEMS.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.router}
                                        className="text-[#777] hover:tracking-[1.6px] hover:text-black duration-500"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mindscape section */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-black">Mindscape</h4>
                        <ul className="space-y-3">
                            {MINDSCAPE_ITEMS.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.router}
                                        className="text-[#777] hover:tracking-[1.6px] hover:text-black duration-500"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* JoinBox section */}
                    <JoinBox />
                </div>
            </ContentWrapper>

            {/* Footer bottom section (Copyrights) */}
            <Copyrights />
        </footer>
    );
};

export default Footer;
