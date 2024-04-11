import logo from "../../Assests/logo.svg"

const PreLoader = () => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center h-screen">
            <img className="animate-pulse w-24" src={logo} alt="genius-grove-logo" />
            <h1 className="text-2xl font-bold text-gray-600 font-lato text-center">MED LIFE EASY</h1>
        </div>
    );
};

export default PreLoader;