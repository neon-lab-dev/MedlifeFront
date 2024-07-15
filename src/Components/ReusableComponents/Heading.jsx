import PropTypes from 'prop-types';

const Heading = ({ title }) => {
    return (
        <div className="">
            <h1 className="text-4xl font-semibold font-lato text-gray-700 text-center mb-4">
                {title}
            </h1>
            <div className="bg-[#E3E3E3] w-full h-0.5 mb-8"></div>
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Heading;
