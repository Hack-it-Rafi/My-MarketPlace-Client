import { useState } from "react";
import useAxiosSecure from "./UseAxiosSecure";
const BidRequestTableRow = ({ bid }) => {
    const { img, job_title, price, status, bidderDeadline, bidderEmail, _id } = bid;
    const [updateStatus, setUpdateStatus] = useState(status);
    const [pongoo, setPongoo] = useState(status !== 'pending');

    // if(status === 'pending'){
    //     setPongoo(false);
    // }
    // else{
    //     setPongoo(true);
    // }

    const axiosSecure = useAxiosSecure();
    const url = `/bidRequests/${_id}`
    const handleAccept = () => {
        // setUpdateStatus('In Progress');
        const stat = { status: 'In Progress' }
        console.log(stat);
        axiosSecure.patch(url, stat)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    setUpdateStatus('In Progress');
                    setPongoo(false);
                }
                else {
                    setUpdateStatus('pending');
                    setPongoo(false);
                }
            })
            .catch(error => console.error(error))
    }
    const handleReject = () => {
        // setUpdateStatus('Rejected');
        const stat = { status: 'Rejected' }
        axiosSecure.patch(url, stat)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    setUpdateStatus('Rejected');
                    setPongoo(true);
                }
                else {
                    setUpdateStatus('pending');
                    setPongoo(false);
                }
            })
            .catch(error => console.error(error))

    }

    console.log(updateStatus);
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{job_title}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="text-sm opacity-50">{bidderEmail}</div>
            </td>
            <td>
                {bidderDeadline}
            </td>
            <td>{price}</td>
            <td>{updateStatus}</td>
            <th>
                {
                    (updateStatus !== 'In Progress' && updateStatus !== 'Complete') ?
                        <>
                            <button onClick={handleAccept} disabled={pongoo} className="btn text-white bg-green-600 hover:bg-green-500  mr-3">Accept</button>
                            <button onClick={handleReject} disabled={pongoo} className="btn text-white bg-red-600 hover:bg-red-500">Reject</button>
                        </> :
                        <>

                        </>
                }
            </th>
        </tr>
    );
};

export default BidRequestTableRow;