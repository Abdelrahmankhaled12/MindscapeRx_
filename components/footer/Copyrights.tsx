// Import necessary dependencies
import React from 'react';
import { ContentWrapper } from '..'; // Wrapper component for consistent layout
import Link from 'next/link'; // Next.js Link component for client-side navigation

// Define the Copyrights component
const Copyrights: React.FC = () => {
    return (
        <div className="bg-[#2c2c2c] py-1">
            <ContentWrapper>
                <div className="flex gap-5 flex-wrap justify-center md:justify-between items-center">
                    {/* Display copyright notice */}
                    <p className="text-[14px] order-2 md:order-1">
                        Copyrights © 2024{' '}
                        <Link href={""} className="underline">
                            Mindscape Rx
                        </Link>{' '}
                        | All Rights Reserved
                    </p>

                    {/* Links to Privacy Policy and Imprint */}
                    <div className="space-x-4">
                        <Link
                            href="/privacy"
                            className="hover:tracking-[1.6px] duration-500 text-[14px]"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/imprint"
                            className="hover:tracking-[1.6px] duration-500 text-[14px]"
                        >
                            Imprint
                        </Link>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Copyrights;
