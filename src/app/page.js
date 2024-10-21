import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[100vh]'>
      <p className='text-xl'>School Site Start</p>
      <br />
      <br />
      <br />
      <div className='bg-blue-500 p-3 rounded-s'>
        <a href='https://github.com/SHIVAM-GOUR/school-site' target='_blank'>Click : Github URL</a>
      </div>
      <br />
      <div className='bg-blue-500 p-3 rounded-s'>
        <a href='https://newschoolsite.netlify.app' target='_blank'>Click : Deployed site URL</a>
      </div>
      <br />
      <div className='bg-blue-200 p-3 rounded-s'>
        Figma is not Decided yet
      </div>
    </div>
  )
}

export default Home