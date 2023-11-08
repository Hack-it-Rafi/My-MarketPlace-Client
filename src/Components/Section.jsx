const Section = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 my-10">
        <div className='md:flex flex-col md:flex-row justify-center items-center w-full'>
            <img src={"https://www.jobvector.com/_nuxt/img/startpageHeader.704c9a2.svg"} alt="" className='md:w-[60%]' />
            <div className='text-center'>
                <h1 className='text-5xl font-semibold bg-gradient-to-r from-orange-900 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text'>Job Solutions</h1>
                <p className="my-2">New Powerful Job finding website in town!</p>
                <p className='text-sm'>New Solutions Will Arrive Soon...Dont miss this Oppurtunity to grab a <span className='text-blue-600'>cool</span> miniature figure</p>
            </div>
        </div>
    </div>
  )
}

export default Section;