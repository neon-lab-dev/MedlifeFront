import { twMerge } from 'tailwind-merge';

const Paragraph4 = ({ children, className }) => {
    return (
        <div>
            <p className={twMerge("text-base font-lato font-normal leading-6", className)}>
                {children}
            </p>
        </div>
    );
};

export default Paragraph4;
