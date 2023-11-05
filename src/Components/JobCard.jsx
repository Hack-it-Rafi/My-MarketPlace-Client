import { useNavigate } from "react-router-dom";

const JobCard = ({job}) => {
    const navigate = useNavigate();
    const {img, category, job_title, deadline, minimum_price, maximum_price, short_description, long_description} = job;

    const handleJobDetails=()=>{
        console.log(job._id);
        navigate(`/jobDetails/${job._id}`)
    }

    return (
        <div className="flex flex-wrap">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="h-44 rounded-lg" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleJobDetails} className="btn btn-primary">Bid Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;