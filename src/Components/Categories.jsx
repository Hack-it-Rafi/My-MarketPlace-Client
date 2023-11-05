import { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Categories = () => {
    return (
        <div className="flex flex-col md:flex-row mt-10 justify-center gap-8 px-5">
            <div>            
                <Tabs defaultFocus={true}>
                    <TabList className={""}>
                        <Tab><h1 className='text-xl bg-gradient-to-r from-orange-900 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text'>Web Development</h1></Tab>
                        <Tab><h1 className='text-xl bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 inline-block text-transparent bg-clip-text'>Digital Marketing</h1></Tab>
                        <Tab><h1 className='text-xl bg-gradient-to-r from-orange-400 via-orange-500 to-orange-900 inline-block text-transparent bg-clip-text'>Graphics Design</h1></Tab>
                    </TabList>
                    <div className='my-10'>

                    </div>
                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Categories;