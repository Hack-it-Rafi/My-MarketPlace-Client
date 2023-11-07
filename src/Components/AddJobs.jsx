// import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "./UseAxiosSecure";

const AddJobs = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const url = '/jobs';

    const handleAddJobs=(event)=>{
        event.preventDefault();
        const form = event.target;
        const employer_email = form.email.value;
        const job_title = form.title.value;
        const category = form.category.value;
        const deadline = form.deadLine.value;
        const minimum_price = form.miniPrice.value;
        const maximum_price = form.maxiPrice.value;
        const img = form.image.value;
        const short_description = form.shortDescription.value;
        const long_description = form.longDescription.value;

        const job = {employer_email, job_title, category, deadline, minimum_price, maximum_price, img, short_description, long_description};

        axiosSecure.post(url, job)
        .then(res=>{
            console.log(res.data);
            navigate('/myPostedJobs');
        })
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="h-24"></div>
            <div className="my-10">
                <div className="bg-slate-100 rounded-lg">
                    <div className="text-center py-20">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-900 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text">Add New Jobs</h2>
                        <p></p>
                    </div>
                    <div>
                        <form onSubmit={handleAddJobs} className="px-5 md:px-20 pb-20">
                            <div className="flex gap-4 md:gap-10">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="email" required placeholder="Type here" name="email" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Job Title</span>
                                    </label>
                                    <input type="text" required placeholder="Type here" name="title" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-10">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Job Category</span>
                                    </label>
                                    <input type="text" required placeholder="Type here" name="category" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Dead Line</span>
                                    </label>
                                    <input type="date" required placeholder="Type here" name="deadLine" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-10">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Minimum Price</span>
                                    </label>
                                    <input type="number" required placeholder="Type here" name="miniPrice" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Maximum Price</span>
                                    </label>
                                    <input type="number" required placeholder="Type here" name="maxiPrice" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-10">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input type="text" required placeholder="Type here" name="image" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" placeholder="Type here" required name="shortDescription"></textarea>

                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Long Description</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-24" placeholder="Type here" required name="longDescription"></textarea>

                                </div>
                            </div>
                            {/* Submit */}
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-800 text-white hover:bg-orange-700">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddJobs;