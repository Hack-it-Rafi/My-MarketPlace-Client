import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Header from "./Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="max-w-7xl mx-auto md:sticky z-10">
                <NavBar></NavBar>
            </div>
                <Outlet></Outlet>
                <Footer></Footer>

        </div>
    );
};

export default Root;