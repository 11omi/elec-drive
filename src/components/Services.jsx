import React from 'react'
import { FaChevronCircleRight } from 'react-icons/fa'

const Services = () => {

    const services = [
        {
            id:1,
            title: 'One',
            subtitle: 'Get turn-by-turn directions. Never miss a turn. Find nearby chargers.',
        },
        {
            id:2,
            title: 'Two',
            subtitle: 'Get turn-by-turn directions. Never miss a turn. Find nearby chargers. ',
        },
        {
            id:3,
            title: 'Three',
            subtitle: 'Get turn-by-turn directions. Never miss a turn. Find nearby chargers. ',
        },
        {
            id:4,
            title: 'Four',
            subtitle: 'Get turn-by-turn directions. Never miss a turn. Find nearby chargers. ',
        },
    ];
  return (
    <div name="services" className="w-full h-fit md:h-screen bg-slate-500">
        <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
            <h2 className='text-5xl font-bold text-center'>Services</h2>
            <p className='text-xl py-8 text-gray-600 text-600'>The third is at the select public spaces like apartment complexes, malls, university campuses and office buildings where Flyte Neighbourhood charges are installed. To request for one to be installed in your building, contact us here.</p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
          {services.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="flex items-start p-4 bg-gray-900 text-white rounded-md"
            >
              <div>
                <FaChevronCircleRight
                  size={20}
                  className="mt-3 mr-4 text-lightColor"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-lightColor pt-2 pb-4 capitalize">
                  {title}
                </h3>
                <p className="text-lg">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;