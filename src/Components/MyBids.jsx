import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./Authentication/AuthProvider";
import axios from "axios";
import MybidsTableRow from "./MybidsTableRow";

const MyBids = () => {
    const [bids, setBids] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:5000/myBids?email=${user.email}`)
            .then(res => {
                setBids(res.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [user.email]);

    // console.log(bids);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="h-24"></div>
            <div className="overflow-x-auto">
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
                            bids.map(bid=><MybidsTableRow key={bid._id} bid={bid}></MybidsTableRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBids;
