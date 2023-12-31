// import axios from "axios";
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "./Authentication/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";
import Swal from "sweetalert2";
import useTitle from "../useTitle";

const JobDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    useTitle('Job Details');
    // console.log(data);
    const { user } = useContext(AuthContext);
    let dateCondition = true;
    // console.log(user.email);
    const { img, category, job_title, deadline, minimum_price, maximum_price, short_description, long_description, employer_email } = data;

    console.log(deadline); //deadline value format: 2023-11-30

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // const jobDeadline = new Date(deadline); // Convert the job's deadline to a Date object
    // const todayDate = new Date(getTodayDate()); // Convert today's date to a Date object

    // const isDeadlinePassed = jobDeadline < todayDate;

    // if (isDeadlinePassed) {
    //     // The deadline has passed
    //     dateCondition = false;
    // } else {
    //     dateCondition = true;
    // }



    const axiosSecure = useAxiosSecure();
    const url = '/bids';

    const handleBidRequest = (event) => {
        event.preventDefault();
        // toast("Your Bid is Placed");
        const form = event.target;
        const price = form.price.value;
        const bidderDeadline = form.deadLine.value;
        const bidderEmail = form.bidderEmail.value;
        const ownerEmail = form.ownerEmail.value;
        const status = "pending";

        if (bidderEmail === ownerEmail) {
            Swal.fire({
                title: 'You Can not Bid on Your Own Job',
                text: 'Something went wrong!',
                icon: 'error',
                confirmButtonText: 'Continue'
            })
            navigate("/");
            return;
        }

        const bid = { img, category, job_title, deadline, minimum_price, maximum_price, short_description, price, bidderDeadline, bidderEmail, ownerEmail, status }

        // console.log(bid);
        axiosSecure.post(url, bid)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Bid Placed Successful!',
                        text: 'Enjoy Exploring!',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })

                    navigate('/myBids');

                }
                form.reset();
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className="max-w-7xl mx-auto px-5">
            <div className="h-24"></div>
            <div className="flex flex-col md:flex-row items-center mt-16">
                <div className="md:w-1/2">
                    <img className="rounded-lg" src={img} alt="" />
                </div>
                <div className="md:w-1/2 text-center">
                    <h1 className="text-4xl font-bold">{job_title}</h1>
                    <p className="my-5">Category: {category}</p>
                    <p className="my-5">DeadLine: {deadline}</p>
                    <p className="my-5">{short_description}</p>
                    <p className="my-5">Price Range: ${minimum_price}-${maximum_price}</p>
                </div>
            </div>
            <div className="max-w-5xl mx-auto my-10">
                <p className="text-justify">{long_description}</p>
            </div>
            <div>
                <div className="bg-slate-100 rounded-lg">
                    <div className="text-center py-10">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-900 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text">Place Your Bid</h2>
                    </div>
                    <div className="my-10">
                        <form onSubmit={handleBidRequest} className="px-5 md:px-20 pb-20">
                            <div className="flex gap-4 md:gap-10">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Your Price</span>
                                    </label>
                                    <input type="number" required placeholder="Type here" name="price" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Dead Line</span>
                                    </label>
                                    <input
                                        type="date"
                                        required
                                        placeholder="Type here"
                                        name="deadLine"
                                        className="input input-bordered w-full"
                                        min={getTodayDate()}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-10">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="email" required placeholder="Type here" name="bidderEmail" readOnly value={user.email} className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Owners Email</span>
                                    </label>
                                    <input type="email" required placeholder="Type here" name="ownerEmail" readOnly value={employer_email} className="input input-bordered w-full" />
                                </div>
                            </div>


                            {/* Submit */}
                            {dateCondition &&
                                <div className="form-control mt-6">
                                    <button className="btn bg-orange-800 text-white hover:bg-orange-700">Bid on the Project</button>

                                </div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;