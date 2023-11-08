import { useState } from "react";
import Swal from 'sweetalert2';
import { GrDocumentUpdate } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "./UseAxiosSecure";
import { motion } from "framer-motion";


const PostedJob = ({ postedJob }) => {
    const { _id, category, job_title, deadline, img, maximum_price, minimum_price, short_description } = postedJob;

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
                // fetch(`https://my-market-place-server.vercel.app/myJobs/${_id}`, {
                //     method: "DELETE",
                //     credentials: 'include'
                // })
                axiosSecure.delete(url)
                    .then(res => {
                        console.log(res.data);
                        setState(false);
                    })
                    .catch(error => console.error(error))
            }
        })


    }

    const handleUpdateJob = () => {
        navigate(`/updateJob/${_id}`);
    }
    // console.log(state);

    return (
        <motion.div whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            {state &&
                <div className="w-full h-36 bg-slate-100 rounded-lg flex justify-center gap-5 items-center">
                    <div className="flex  justify-around items-center w-full">
                        <div className="w-[30%] flex justify-end">
                            <div className="text-center">
                            <img className="w-[80px] mx-auto" src={img} alt="hero" />
                            <p className="text-lg font-semibold"><span className="font-sans">{job_title}</span></p>
                            <p className="text-sm"><span className="font-sans">{category}</span></p>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <div className="mb-5">

                                <p className="text-lg font-semibold"><span className="font-sans">{deadline}</span></p>
                                <p className="text-lg"><span className="font-sans">${minimum_price} - ${maximum_price}</span></p>
                                <p className="text-sm"><span className="font-sans">{short_description}</span></p>
                            </div>
                        </div>
                        <div className="w-[15%] flex justify-center">
                            <div>
                                <button onClick={handleUpdateJob} className="btn bg-green-400 text-white hover:bg-cyan-800 hover:text-[#2B3440]"><GrDocumentUpdate></GrDocumentUpdate></button><br /><br />
                                <button onClick={handleDeleteJob} className="btn bg-red-500 text-white hover:bg-cyan-800 "><AiFillDelete></AiFillDelete></button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </motion.div>
    );
};

export default PostedJob;