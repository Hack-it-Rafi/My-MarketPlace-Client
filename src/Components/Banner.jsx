import person from "../../public/hardy.png"
const Banner = () => {
    return (
        <div className="w-full bg-[#FFF8F3]">
            <div className="h-[600px] max-w-7xl md:flex justify-between">
                <div className="lg:w-2/3 h-full flex justify-center items-center">
                    <div className="pl-5">
                        <h1 className=" text-6xl font-semibold bg-gradient-to-r from-orange-900 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text">We Find You <br />The Best</h1>
                        <p className="my-5 text-lg font-medium">Find Your Desired Jobs Here</p>
                    </div>
                </div>
                <div className="hidden h-full md:flex justify-end items-end mr-5">
                    <img className="w-11/12" src={person} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;