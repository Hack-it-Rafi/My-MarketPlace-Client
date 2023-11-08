import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Authentication/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";
import BidRequestTableRow from "./BidRequestTableRow";
import useTitle from "../useTitle";

const BidRequests = () => {
    const [bids, setBids] = useState([]);
    const { user } = useContext(AuthContext);
    useTitle('Bid Requests');

    const axiosSecure = useAxiosSecure();
    const url = `/bidRequests?email=${user.email}`;
    useEffect(()=>{
        axiosSecure.get(url)
        .then(res => {
            setBids(res.data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    },[axiosSecure, url])

    console.log(bids);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="h-24"></div>
            <div className="w-full flex justify-center mb-16">
                <h1 className="text-6xl font-semibold bg-gradient-to-r from-orange-900 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text">All Your Bids Here</h1>
            </div>
            <div className="overflow-x-auto md:min-h-[200px]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Bidder Email</th>
                            <th>Bidder DeadLine</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bids.map(bid=><BidRequestTableRow key={bid._id} bid={bid}></BidRequestTableRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default BidRequests;