const ContactUs = () => {
    return (
        <div className="max-w-7xl mx-auto my-20 px-5">
            <div className="bg-slate-100 rounded-lg ">
                <div className="text-center pt-20">
                    <h2 className="text-4xl font-semibold bg-gradient-to-r from-orange-900 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text">Contact Us</h2>
                    <p></p>
                </div>
                <div>
                    <form className="px-5 md:px-20 pb-20">
                        <div className="flex gap-4 md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" required placeholder="Type here" name="name" className="input input-bordered w-full" />
                            </div>
                            
                        </div>
                        <div className="flex gap-4 md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required  placeholder="Type here" name="brand" className="input input-bordered w-full" />
                            </div>
                            
                        </div>
                        
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-24" placeholder="Type here" required name="description"></textarea>
                            </div>
                        
                        {/* Submit */}
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-800 text-white hover:bg-orange-700">Send Response</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;