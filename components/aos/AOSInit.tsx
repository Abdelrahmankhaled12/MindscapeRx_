"use client";

import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; // Importing the AOS CSS for animations

// AOSInit component to initialize AOS animation library
export const AOSInit = () => {
    useEffect(() => {
        // Initialize AOS on component mount
        AOS.init({
            once: true, // Ensures animations only happen once when they come into view
        });
    }, []); // Empty dependency array ensures this runs only once

    return null; // This component does not render anything to the DOM
};
