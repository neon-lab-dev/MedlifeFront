import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Heading3 = ({ children, className }) => {
    return (
        <div>
            <h2 className={twMerge("text-[32px] font-lato font-bold leading-[40px]", className)}>
                {children}
            </h2>
        </div>
    );
};

Heading3.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Heading3;
