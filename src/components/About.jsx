import React from 'react'

const About = () => {

    const details = [
        {
            id:1,
            title:'99.99%',
            subtitle: 'uptime'
        },
        {
            id:2,
            title:'24/7',
            subtitle: 'Customer Service'
        },
        {
            id:3,
            title:'Ride',
            subtitle: 'Notified'
        },
        {
            id:4,
            title:'Tracker',
            subtitle: 'Upcoming'
        },


    ];

  return (
    <div
    name="about"
    className="w-full h-fit md:h-screen bg-gray-900 text-white"
  >
    <div className="flex flex-col items-center justify-center max-w-screen-xl m-auto h-full px-3 py-12">
      <div className="text-center ">
        <h2 className="text-5xl font-bold mt-20">
          By <span className="text-lightColor">Developers</span> for{" "}
          <span className="text-lightColor">Developers</span>
        </h2>
        <p className="text-xl font-light text-gray-500 py-8">Ride without having to stop to see who’s calling or texting. Manage calls and messages right on the dashboard.Keep your loved ones in the know, and get the help you need, when you need it.</p>

            </div>
            <div className='grid md:grid-cols-2 gap-10 px-2 w-full h-full'>
                {details.map(({ id, title, subtitle}) => (
                    <div key={id} className="flex items-center justify-center odd:skew-x-12 even:-skew-x-12 hover:skew-x-0 duration-300">
                    <div className='flex flex-col items-center justify-center w-60 h-58 py-8 rounded-full shadow-lg shadow-lightColor '>
                        <p className='text-5xl font-bold text-lightColor text-center'>{title}</p>
                        <p className='text-gray-400 mt-2 capitalize'>{subtitle}</p>
                    </div>
                </div>

                ))}
                

            </div>

        </div>
    </div>
  )
}

export default About;