import { useState } from "react";
import Swal from 'sweetalert2';
import { GrDocumentUpdate } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "./UseAxiosSecure";

const PostedJob = ({ postedJob }) => {
    const { _id, category, job_title, deadline, img, long_description, maximum_price, minimum_price, short_description} = postedJob;

    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const url = `/myJobs/${_id}`
    // console.log(product);
    const [state, setState] = useState(true);
    const handleDeleteJob = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                // fetch(`http://localhost:5000/myJobs/${_id}`, {
                //     method: "DELETE",
                //     credentials: 'include'
                // })
                axiosSecure.delete(url)
                    .then(res => res.json())
                    .then(() => {                       
                        setState(false);
                    })
                    .catch(error => console.error(error))
            }
        })


    }

    const handleUpdateJob=()=>{
        navigate(`/updateJob/${_id}`);
    }
    // console.log(state);

    return (
        <div>
            {state &&
                <div className="w-full h-36 bg-slate-100 rounded-lg flex justify-center items-center">
                    <div className="flex justify-around items-center w-full">
                        <img className="w-[80px]" src={img} alt="hero" />
                        <div>
                            <div className="mb-5">
                                <p className="text-lg font-semibold"><span className="font-sans">{job_title}</span></p>
                                <p className="text-sm"><span className="font-sans">{category}</span></p>
                                <p className="text-lg font-semibold"><span className="font-sans">{deadline}</span></p>
                                <p className="text-lg"><span className="font-sans">${minimum_price} - ${maximum_price}</span></p>
                                <p className="text-sm"><span className="font-sans">{short_description}</span></p>
                            </div>
                        </div>
                        <div>
                            <button onClick={handleUpdateJob} className="btn bg-green-400 text-white hover:bg-cyan-800 hover:text-[#2B3440]"><GrDocumentUpdate></GrDocumentUpdate></button><br /><br />
                            <button onClick={handleDeleteJob} className="btn bg-red-500 text-white hover:bg-cyan-800 "><AiFillDelete></AiFillDelete></button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default PostedJob;