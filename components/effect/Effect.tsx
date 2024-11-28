
// Effect component definition with TypeScript typing for props
interface EffectProps {
    children: React.ReactNode; // Defining the type of the 'children' prop
}

const Effect: React.FC<EffectProps> = ({ children }) => {
    return (
        <>
            <div className='effect'>
                <div className="children">
                    {children} {/* Rendering children components */}
                </div>
            </div>
        </>
    );
};

export default Effect; // Exporting Effect component
