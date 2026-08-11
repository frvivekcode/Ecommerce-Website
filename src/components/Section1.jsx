import React from 'react'
import Headphone from '../assets/Headphone.png.png'

const Section1 = () => {
  return (
    <div className='h-[90%] bg-[#ffff] w-full px-7 font-["Helvetica"]'>

      <img
        className='absolute left-[40%] bottom-35'
        src={Headphone}
        alt="Headphone"
      />

      <div className='min-h-screen bg-[#cfcfcf] flex items-center rounded-2xl'>
        
        <div className='pl-[6rem] h-[500px] w-[100%]'>

          <h3 className='text-3xl font-medium'>
            Beats Solo
          </h3>

          <h2 className='text-8xl font-bold leading-none'>
            Wireless
          </h2>

          <h1 className='text-white text-[190px] uppercase font-bold leading-none'>
            headphone
          </h1>

          <div className='flex justify-between mt-5 pr-20 h-[150px] items-start'>

            <button className='bg-[#f10909] active:scale-95 hover:cursor-pointer rounded-3xl text-white px-8 py-3'>
              Shop By categoy
            </button>

            <div>
              <h2 className='text-xl font-bold text-right'>
                Description
              </h2>

              <div className='w-[300px] text-right'>
                <p>
                  Experience rich sound, deep bass, and all-day comfort
                  with our premium wireless headphones. Built for style,
                  performance, and every moment.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Section1