import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../public/login.png"

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (event)=>{
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        
    }
    return (
        <div>
            <div className="h-24"></div>
            <div className="hero min-h-screen mb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center flex justify-center w-1/2 lg:text-left">
                        <img className="w-2/3" src={logo} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleLogin} className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;