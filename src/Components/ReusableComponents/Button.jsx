import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Button = ({ className, btnLabel, variant }) => {
    // Primary and secondary variants
    const primaryStyles = "bg-[#00a79d] hover:bg-teal-600 transition duration-300 px-4 w-full h-12 2xl:h-16 rounded-lg text-white";
    const secondaryStyles = "p-4 border border-teal-100 text-[16px] font-lato text-teal-100 font-semibold";

    // Determine which styles to apply based on the variant prop
    let buttonStyles;
    if (variant === 'primary') {
        buttonStyles = primaryStyles;
    } else if (variant === 'secondary') {
        buttonStyles = secondaryStyles;
    } else {
        buttonStyles = primaryStyles;
    }

    return (
        <button
            className={twMerge(buttonStyles, className)}
            type="submit"
        >
            {btnLabel}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    btnLabel: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
    variant: 'primary',
};

export default Button;
