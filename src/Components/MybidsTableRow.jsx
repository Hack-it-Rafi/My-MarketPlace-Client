import { useState } from "react";

const MybidsTableRow = ({bid}) => {
    // console.log(bid);
    const [update, setUpdate] = useState('');
    const {img, category, job_title, deadline, minimum_price, maximum_price, short_description, ownerEmail, status } = bid;
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
            <td>{status}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default MybidsTableRow;