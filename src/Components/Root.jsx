import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto sticky z-10">
                <NavBar></NavBar>
            </div>
                <Outlet></Outlet>
                <Footer></Footer>

        </div>
    );
};

export default Root;