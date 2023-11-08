import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./Authentication/AuthProvider";
// import axios from "axios";
import MybidsTableRow from "./MybidsTableRow";
import useAxiosSecure from "./UseAxiosSecure";
import useTitle from "../useTitle";

const MyBids = () => {
    const [bids, setBids] = useState({ results: [], nonSortedResults: [] });
    const [sortBids, setSortBids] = useState([]);
    const { user } = useContext(AuthContext);
    useTitle('My Bids');

    const axiosSecure = useAxiosSecure();
    const url = `/myBids?email=${user.email}`
    useEffect(() => {
        axiosSecure.get(url)
        .then(res => {
            setBids(res.data);
            setSortBids(res.data.nonSortedResults)
            console.log("Rafiiiiiii");
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

    }, [axiosSecure, url]);

    const handleSort = ()=>{
        setSortBids(bids.results);
    }


    // console.log(bids);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="h-24"></div>
            <div className="w-full flex justify-center mb-16">
                <h1 className="text-6xl font-semibold bg-gradient-to-r from-orange-900 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text">All Your Bids Here</h1>
            </div>
            <div className="w-full flex justify-end">
                <button onClick={handleSort} className="btn btn-xs">Sort by status</button>
            </div>
            <div className="overflow-x-auto md:min-h-[200px]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Employer Email</th>
                            <th>DeadLine</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            sortBids.map(bid=><MybidsTableRow key={bid._id} bid={bid}></MybidsTableRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBids;
