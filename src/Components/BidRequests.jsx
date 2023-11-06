import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Authentication/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";
import BidRequestTableRow from "./BidRequestTableRow";

const BidRequests = () => {
    const [bids, setBids] = useState([]);
    const { user } = useContext(AuthContext);

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
            <div className="overflow-x-auto">
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