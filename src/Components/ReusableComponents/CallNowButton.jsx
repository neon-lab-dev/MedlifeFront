import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';

const CallNowButton = ({ className }) => {
  return (
    <a
      href="tel:+91 995 599 2502"
      className={twMerge("w-full flex justify-center items-center border h-12 2xl:h-16 border-[#00a0aa] rounded-lg text-[#00a0aa]", className)}
    >
      {/* <div className={twMerge("w-[70%] md:w-[60%] h-12 2xl:h-16 border border-[#00a0aa] rounded-lg text-[#00a0aa] flex items-center justify-center")}> */}
        Call now +91 995 599 2502
      {/* </div> */}
    </a>
  );
};

CallNowButton.propTypes = {
  className: PropTypes.string,
};

CallNowButton.defaultProps = {
  className: '',
};

export default CallNowButton;
