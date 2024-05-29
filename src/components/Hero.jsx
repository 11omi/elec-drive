import React from 'react'
import GreenBtn from './GreenBtn'



const Hero = () => {

    const logo = 'https://media.atherenergy.com/Map_Desktop_result_db0d31ab3d.webp';

    return (
        
        
        <div
            name="home"
            className="flex flex-col justify-between w-full h-screen bg-gray-900 text-white text-center md:text-left"
        >
            <div className="grid md:grid-cols-2 max-w-screen-xl m-auto px-3">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <p className="text-2xl text-gray-500">
                        Pure Performance ~ Pure Magic
                    </p>
                    <h1 className="pt-1 pb-6 text-5xl md:text-7xl font-bold">
                        <span className="text-lightColor">FLYTE</span> Take a Ride
                    </h1>
                    <p className='text-base font-light text-gray-500'>Presenting all-new electric scooters from Flyte. Built to outperform both EV scooters and petrol scooters alike, with all the style, smarts and speed you need.</p>
                    <GreenBtn title="Sign up" className='capitalize py-3 px-6 sm:w-8/12 my-8'/>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={logo} alt='img' className="w-3/4 rounded-full"/>
                </div>
            </div>

        </div>
    )
}

export default Hero;