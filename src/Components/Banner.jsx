import person from "../../public/hardy.png"
const Banner = () => {
    return (
        <div className="h-[600px] bg-[#FFF8F3] md:flex justify-between">
            <div className="lg:w-2/3 h-full flex justify-center items-center">
                <h1 className="text-6xl font-bold">Hello</h1>
            </div>
            <div className="hidden h-full lg:flex justify-end items-end mr-5">
                <img className="w-11/12" src={person} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;