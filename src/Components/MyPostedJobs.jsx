import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Authentication/AuthProvider";
import axios from "axios";
import PostedJob from "./PostedJob";

const MyPostedJobs = () => {
    const [postedJobs, setPostedJobs] = useState([]);
    const { user } = useContext(AuthContext);
    // console.log(user.email);
    
    useEffect(() => {
        axios.get(`http://localhost:5000/myJobs?email=${user.email}`)
            .then(res => {
                setPostedJobs(res.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [user.email]);
    // console.log(postedJobs);
    return (
        <div className=" max-w-7xl mx-auto my-10 px-5">
            <div className="h-24"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap 8">
                {
                    postedJobs.map(postedJob=><PostedJob key={postedJob._id} postedJob={postedJob}></PostedJob>)
                }
            </div>
        </div>
    );
};

export default MyPostedJobs;