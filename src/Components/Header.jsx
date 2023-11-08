import logo from "../../public/mainLogo2.png"
const Header = () => {
    return (
        <div className="md:hidden flex flex-col md:flex-row justify-center items-center">
            <img className="w-36 md:w-40" src={logo} alt="" />
            <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 inline-block text-transparent bg-clip-text">KhuJoo</h1>
            </div>
            
        </div>
    );
};

export default Header;