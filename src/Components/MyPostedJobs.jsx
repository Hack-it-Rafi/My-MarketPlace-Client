import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Authentication/AuthProvider";
// import axios from "axios";
import PostedJob from "./PostedJob";
import useAxiosSecure from "./UseAxiosSecure";
import useTitle from "../useTitle";

const MyPostedJobs = () => {
    const [postedJobs, setPostedJobs] = useState([]);
    const { user } = useContext(AuthContext);
    useTitle('My Posted Jobs');
    // console.log(user.email);
    const axiosSecure = useAxiosSecure();
    const url = `/myJobs?email=${user.email}`
    useEffect(() => {
        // axios.get(`https://my-market-place-server.vercel.app/myJobs?email=${user.email}`, {withCredentials: true})
            // .then(res => {
            //     setPostedJobs(res.data);
            // })
            // .catch(error => {
            //     console.error("Error fetching data:", error);
            // });
        axiosSecure.get(url)
        .then(res => {
            setPostedJobs(res.data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

    }, [url, axiosSecure]);
    // console.log(postedJobs);
    return (
        <div className=" max-w-7xl mx-auto my-10 px-5">
            <div className="h-24"></div>
            <div className="w-full flex justify-center mb-16">
                <h1 className="text-6xl font-semibold bg-gradient-to-r from-orange-900 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text">All Your Jobs Here</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[200px]">
                {
                    postedJobs.map(postedJob=><PostedJob key={postedJob._id} postedJob={postedJob} setPostedJobs={setPostedJobs}></PostedJob>)
                }
            </div>
        </div>
    );
};

export default MyPostedJobs;