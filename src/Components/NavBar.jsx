import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "./Authentication/AuthProvider";
import logo from "../../public/mainLogo2.png";

const NavBar = () => {
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }


    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 && !scrolling) {
                setScrolling(true);
            } else if (window.scrollY === 0 && scrolling) {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolling]);

    const navLinks = <>
        <li className="mr-1"><Link to='/'>Home</Link></li>
        <li className="mr-1"><Link to='/addJobs'>Add Jobs</Link></li>
        <li className="mr-1"><Link to="/myPostedJobs">My Posted Jobs</Link></li>
        <li className="mr-1"><Link to="/myBids">My Bids</Link></li>
        <li className=""><Link to="/bidRequests">Bid Requests</Link></li>
    </>

    return (
        <div className={`${scrolling ? 'bg-white' : 'bg-transparent'} md:fixed px-8 top-0 left-0 w-full transition-all duration-300`}>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <div className="hidden md:flex items-center ">
                        <img className="w-28" src={logo} alt="" />
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 inline-block text-transparent bg-clip-text">KhuJoo</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {location.pathname != "/login" ? (
                        user ?
                            <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt="" />
                                    </div>
                                </label>
                                <span>{user?.displayName}</span>
                                <button onClick={handleLogOut} className="btn z">
                                    Sign Out
                                </button>
                            </>
                            :
                            <Link to="/login">
                                <button className="btn z">Log In</button>
                            </Link>

                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default NavBar;