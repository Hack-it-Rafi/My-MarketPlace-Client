import { useContext, useState } from "react";
import { AuthContext } from "./Authentication/AuthProvider";

const BidRequests = () => {
    const [bids, setBids] = useState([]);
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="h-24"></div>
        </div>
    );
};

export default BidRequests;