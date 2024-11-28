'use client';

import Image from 'next/image'; // Importing Next.js Image component for optimized images
import Link from 'next/link'; // Importing Link component for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome component for icons
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'; // Importing necessary icons
import MenuMobile from './menu/MenuMobile'; // Mobile menu component
import { useState } from 'react'; // Importing useState for managing mobile menu state
import logo from '../../assets/logo_iconAndtext.png'; // Logo image
import { HEADER_LINKS } from '@/constants'; // Importing header links from constants
import { usePathname } from 'next/navigation'; // Importing usePathname for active route handling

const Header = () => {
  const path = usePathname(); // Get current pathname to highlight active link

  const [isOpenMenu, setIsOpenMenu] = useState(false); // State to manage mobile menu visibility

  return (
    <>
      {/* Header wrapper with absolute positioning */}
      <header className={`absolute overflow-hidden text-white pt-2 z-[1000] w-full`}>
        <div className='w-full max-w-[1400px] mx-auto px-5 xl:px-0 xl:py-4'>
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo section */}
            <div className="header">
              <Image className='z-10' src={logo} alt="MindscapeRx Logo" width={200} height={40} />
            </div>

            {/* Navigation links for desktop */}
            <nav className="hidden md:flex gap-[50px]">
              {
                HEADER_LINKS.map((item, index) => (
                  <Link
                    href={item.router}
                    key={index}
                    className={`hover:text-[#ffffff] text-[17px] relative block duration-500 ${path === item.router ? "text-[#ffffff] activeItem" : "text-[#ffffffbf]"}`}
                  >
                    {item.title}
                  </Link>
                ))
              }
            </nav>

            {/* Member login button for desktop */}
            <Link
              href="/login"
              className='hidden md:flex gap-3 group items-center bg-[#ffffff30] px-[28px] py-[15px] rounded-full border-[1px] border-[#ffffff79] duration-500 hover:bg-[#ffffff] hover:text-[#000000]'
            >
              <FontAwesomeIcon icon={faUser} className='text-[#ffffff] group-hover:text-[#000000] duration-500' />
              <p>Member Login</p>
            </Link>

            {/* Mobile menu button */}
            <button
              className='text-[30px] block md:hidden'
              onClick={() => setIsOpenMenu(true)}
              aria-label="Open menu" // Adding aria-label for better accessibility
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu component */}
      <MenuMobile
        isOpenMenu={isOpenMenu}
        closeModalMenu={() => setIsOpenMenu(false)} // Close menu handler
      />
    </>
  );
};

export default Header;
