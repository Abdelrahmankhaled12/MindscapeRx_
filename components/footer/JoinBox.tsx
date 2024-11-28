import React from 'react';

// Define the JoinBox component
const JoinBox: React.FC = () => {
    return (
        <div className="bg-green-100 h-fit py-6 px-8 rounded-[30px]">
            {/* Heading for the JoinBox */}
            <h4 className="text-black text-[25px] font-medium mb-1">
                Join the Mindscape Rx
            </h4>
            
            {/* Subheading text */}
            <p className="text-[13px] text-[#777] mb-4">
                Begin your journey with us. Sign up to be our newsletter.
            </p>
            
            {/* Newsletter subscription form */}
            <form className="flex flex-wrap gap-3">
                {/* Email input field */}
                <input
                    type="email"
                    placeholder="Your Email"
                    className="rounded-[50px] py-3 text-[12px] px-[20px] w-full"
                    required // Ensures the input is validated as an email
                />
                
                {/* Submit button */}
                <button
                    type="submit"
                    className="block w-full rounded-[50px] bg-black text-yellow-500 py-3 px-6 border border-solid border-black duration-500 font-medium hover:bg-white hover:text-black"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default JoinBox;
