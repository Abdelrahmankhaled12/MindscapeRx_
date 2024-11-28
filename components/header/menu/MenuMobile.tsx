'use client';

import { HEADER_LINKS } from "@/constants";
import Image from "next/image";
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons'; // Import close icon from FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import logo from '../../../assets/logo.png';
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Importing usePathname for active route handling

/**
 * MenuMobile Component
 * Renders the mobile menu with navigation links, login button
 */

interface MenuMobileProps {
    isOpenMenu: boolean; // Prop to control the menu visibility
    closeModalMenu: () => void; // Prop to close the menu
}

const MenuMobile: React.FC<MenuMobileProps> = ({ isOpenMenu, closeModalMenu }) => {
    const path = usePathname(); // Get current pathname to highlight active link

    return (
        <div
            className={`fixed bg-[rgba(0,_0,_0,_0.159)] w-full h-screen right-0 top-0 z-[100000] transform transition-all duration-500 ${isOpenMenu ? "" : "translate-x-full"}`}
        >
            <div className="flex">
                {/* Clickable area to close the menu */}
                <div style={{ "flex": "1" }} onClick={closeModalMenu} aria-label="Close menu"></div>

                {/* Menu content */}
                <div className="bg-white h-screen w-[400px] py-5 flex flex-col">
                    {/* Header with Logo and Close Button */}
                    <div className="flex justify-between items-center border-b border-[rgba(255,_255,_255,_0.213)] px-5 py-2.5">
                        <div className="logo">
                            <Image src={logo} alt="logo" width={150} height={40} />
                        </div>
                        <button
                            className="bg-black text-[20px] px-3 py-2 text-yellow-500 rounded-[8px] flex justify-center items-center transition-all duration-500 border border-solid border-black hover:text-black hover:bg-[#ffffff]"
                            onClick={closeModalMenu}
                            aria-label="Close menu" // Accessibility improvement
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>

                    {/* Menu Links */}
                    <div>
                        <ul className="list-none justify-center px-[30px] border-t border-[#00000023]">
                            {HEADER_LINKS.map((item, index) => (
                                <li
                                    className={`cursor-pointer relative transition-all duration-500 my-5 w-full  ${path === item.router ? "text-[#007bff]" : "text-[#1D2E36]"}`}
                                    key={index}
                                >
                                    <Link href={item.router}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Member Login Link */}
                        <Link
                            href="/login"
                            className='flex gap-3 items-center bg-black px-[28px] py-[15px] w-fit duration-500 text-[#ffffff] rounded-full border-[1px] border-[#000000eb] ml-2 group hover:text-[#000000] hover:bg-transparent'
                        >
                            <FontAwesomeIcon icon={faUser} className='text-[#ffffff] duration-500 group-hover:text-[#000000]' />
                            <p>Member Login</p>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MenuMobile; // Export MenuMobile component as the default export
