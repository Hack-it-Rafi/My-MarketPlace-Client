import { useState } from "react";
import useAxiosSecure from "./UseAxiosSecure";

const MybidsTableRow = ({bid}) => {
    // console.log(bid);
    
    const {_id, img, job_title, deadline, ownerEmail, status } = bid;

    const [updateStatus, setUpdateStatus] = useState(status);

    const axiosSecure = useAxiosSecure();
    const url = `/myBids/${_id}`
    const handleUpdate = ()=>{
        const stat = { status: 'Complete' }
        console.log(stat);
        axiosSecure.patch(url, stat)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    setUpdateStatus('Complete');
                    // setPongoo(false);
                }
                else {
                    setUpdateStatus(status);
                    // setPongoo(false);
                }
            })
            .catch(error => console.error(error))
    }
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
            <div className="text-sm opacity-50">{ownerEmail}</div>
            </td>
            <td>
                {deadline}
            </td>
            <td>{updateStatus}</td>
            <th>
                {
                    (updateStatus === 'In Progress')?
                    <button onClick={handleUpdate} className="btn bg-green-600 hover:bg-green-400 text-white">Complete</button>
                    :
                    <></>
                }
            </th>
        </tr>
    );
};

export default MybidsTableRow;