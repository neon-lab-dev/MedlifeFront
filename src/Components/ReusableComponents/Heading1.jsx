import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Heading1 = ({ children, className }) => {
    return (
        <div>
            <h2 className={twMerge("text-[] md:text-[] 2xl:text-[64px] font-lato font-extrabold leading-[72px]", className)}>
                {children}
            </h2>
        </div>
    );
};

Heading1.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Heading1;
