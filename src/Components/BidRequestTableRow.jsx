const BidRequestTableRow = ({bid}) => {
    const {img, job_title, price, status, bidderDeadline, bidderEmail, _id } = bid;
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
            <td>{status}</td>
            <th>
                <button className="btn text-white bg-green-600 hover:bg-green-500  mr-3">Accept</button>
                <button className="btn text-white bg-red-600 hover:bg-red-500">Reject</button>
            </th>
        </tr>
    );
};

export default BidRequestTableRow;