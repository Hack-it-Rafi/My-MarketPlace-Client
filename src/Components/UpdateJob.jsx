import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./Authentication/AuthProvider";
// import axios from "axios";
import Swal from 'sweetalert2';
import useAxiosSecure from "./UseAxiosSecure";

const UpdateJob = () => {
    const {user} = useContext(AuthContext);
    const id = useParams();
    const navigate = useNavigate();
    // console.log(id.id);

    const [loadedJobs, setLoadedJobs] = useState([]);

    const axiosSecure = useAxiosSecure();
    const url = `/myJobs/${id.id}`
    useEffect(() => {
        axiosSecure.get(url)
        .then(res => {
            setLoadedJobs(res.data);
            console.log(res.data);
        });
    }, [axiosSecure, url]);

    const handleUpdateJob= (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const minprice = form.minprice.value;
        const maxprice = form.maxprice.value;
        const shortDes = form.shortDes.value;
        const longDes = form.longDes.value;

        const job = {email, title, deadline, category, minprice, maxprice, shortDes, longDes};

        axiosSecure.patch(url, job)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                Swal.fire({
                    title: 'Update Successful!',
                    text: 'Enjoy Exploring!',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                });
                form.reset();
                navigate('/myPostedJobs');
            }
        })
        .catch(error=>console.error(error))


    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="bg-slate-100 rounded-lg mt-16">
                <div className="text-center py-20">
                    <h2 className="font-Young text-4xl">Update Job</h2>
                    <p></p>
                </div>
                <div>
                    <form onSubmit={handleUpdateJob} className="px-5 md:px-20 pb-20">
                        <div className="flex gap-4 md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" readOnly required value={user.email} placeholder="Type here" name="email" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Job Title</span>
                                </label>
                                <input type="text" required defaultValue={loadedJobs.job_title} placeholder="Type here" name="title" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="flex gap-4 md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Dead Line</span>
                                </label>
                                <input type="date" required defaultValue={loadedJobs.deadline} placeholder="Type here" name="deadline" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" required defaultValue={loadedJobs.category} placeholder="Type here" name="category" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="flex gap-4 md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Minimum Price</span>
                                </label>
                                <input type="number" required defaultValue={loadedJobs.minimum_price} placeholder="Type here" name="minprice" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Maximum Price</span>
                                </label>
                                <input type="text" required defaultValue={loadedJobs.maximum_price} placeholder="Type here" name="maxprice" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="flex gap-4 md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input type="text" required defaultValue={loadedJobs.short_description} placeholder="Type here" name="shortDes" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Long Description</span>
                                </label>
                                <input type="text" required placeholder="Type here" name="longDes" className="input input-bordered w-full" />
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="form-control mt-6">
                            <button className="btn bg-[#2B3440] text-white hover:bg-slate-800">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateJob;