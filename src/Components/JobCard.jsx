import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const JobCard = ({ job }) => {
    const navigate = useNavigate();
    const { img, job_title, deadline, minimum_price, maximum_price, short_description } = job;

    const handleJobDetails = () => {
        console.log(job._id);
        navigate(`/jobDetails/${job._id}`)
    }

    return (
        <motion.div whileHover={{ scale: 1.05 }}
        className="flex flex-wrap">          
            <div className="card w-full card-compact bg-base-100 shadow-xl">
                <figure><img className="h-44 rounded-lg" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <div className="w-full flex justify-between">
                        <p>{deadline}</p>
                        <p><small>${minimum_price} - ${maximum_price}</small></p>
                    </div>
                    <p className="text-justify">{short_description}</p>
                    <div className="card-actions justify-center">
                        <button onClick={handleJobDetails} className="btn btn-primary">Bid Now</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default JobCard;