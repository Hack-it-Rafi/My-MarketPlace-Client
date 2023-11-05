import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Root = () => {
    return (
        <div className="relative">
            <div className="max-w-7xl mx-auto sticky z-10">
                <NavBar></NavBar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;