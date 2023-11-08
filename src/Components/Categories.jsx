import axios from 'axios';
import { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const Categories = () => {
    const [jobs, setJobs] = useState([]);

    const handleWebJobs = () => {
        axios.get("https://my-market-place-server.vercel.app/categoryJobs?category=Web%20Development")
            .then(res => {
                console.log(res.data);
                setJobs(res.data);
            })
    }
    const handleMarketingJobs = () => {
        axios.get("https://my-market-place-server.vercel.app/categoryJobs?category=Digital%20Marketing")
            .then(res => {
                console.log(res.data);
                setJobs(res.data);
            })
    }
    const handleGraphicsJobs = () => {
        axios.get("https://my-market-place-server.vercel.app/categoryJobs?category=Graphics%20Design")
            .then(res => {
                console.log(res.data);
                setJobs(res.data);
            })
    }
    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row my-10 justify-center gap-8 px-5">
            <div>
                <Tabs defaultFocus={true}>
                    <div className='flex justify-center'>
                    <TabList>
                        <Tab onFocus={handleWebJobs}><h1 className='text-xl bg-gradient-to-r from-orange-900 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text'>Web Development</h1></Tab>
                        <Tab onFocus={handleMarketingJobs}><h1 className='text-xl bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 inline-block text-transparent bg-clip-text'>Digital Marketing</h1></Tab>
                        <Tab onFocus={handleGraphicsJobs}><h1 className='text-xl bg-gradient-to-r from-orange-400 via-orange-500 to-orange-900 inline-block text-transparent bg-clip-text'>Graphics Design</h1></Tab>
                    </TabList>
                    </div>
                    <div className='my-10'>

                    </div>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                            {
                                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                            {
                                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                            {
                                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                            }
                        </div>
                    </TabPanel>
                    
                </Tabs>
            </div>
        </div>
    );
};

export default Categories;