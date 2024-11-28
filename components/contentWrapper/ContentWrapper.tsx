
// Defining the type for the component props
interface ContentWrapperProps {
    children: React.ReactNode; // The children prop can be any valid React node
}

// ContentWrapper component definition
const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
    return (
        <div className='w-full max-w-[1200px] mx-auto px-5 py-3 xl:px-0 xl:py-4'>
            {children} {/* Rendering the children components passed to this component */}
        </div>
    );
};

export default ContentWrapper; // Exporting the ContentWrapper component