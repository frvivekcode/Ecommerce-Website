import React from 'react'

import Earphone from '../assets/Earphone.png'
import Gadget from '../assets/Gadget.png'
import Laptop from '../assets/Laptop.png'
import Console2 from '../assets/Console2.png'
import VR from '../assets/VR.png'
import Speaker from '../assets/Speaker.png'

const Section2 = () => {
  return (
    <div className='h-[calc(100vh-5rem)] grid grid-cols-4 font-["Helvetica"] gap-7 px-7 py-7 grid-rows-2 bg-[#3f3d3d00] w-full'>

      {/* Earphone */}
      <div className="01 rounded-3xl bg-[#292928] p-10 flex flex-col justify-end">
        <div className='relative'>
          <h3 className='text-xl text-[#9e9e9e]'>Enjoy</h3>

          <h2 className='text-white text-4xl font-bold z-100'>
            With
          </h2>

          <h1 className='text-[#ffffff5a] text-5xl font-bold uppercase'>
            Earphone
          </h1>

          <button className='py-2 mt-3 active:scale-95 hover:cursor-pointer rounded-3xl text-white px-5 bg-[#0b85f8]'>
            Browse
          </button>

          <img
            className='absolute pointer-events-none z-5 bottom-0 left-13'
            src={Earphone}
            alt="Earphone"
          />
        </div>
      </div>


      {/* Gadget */}
      <div className="02 rounded-3xl bg-[#ff8800] p-10 flex flex-col justify-end">
        <div className='relative'>
          <h3 className='text-xl text-[#9e9e9e]'>Must</h3>

          <h2 className='text-white text-4xl font-bold z-100'>
            Wear
          </h2>

          <h1 className='text-[#ffffff5a] text-6xl font-bold uppercase'>
            Gedget
          </h1>

          <button className='py-2 mt-3 active:scale-95 hover:cursor-pointer rounded-3xl text-white px-5 bg-[#292928]'>
            Browse
          </button>

          <img
            className='absolute pointer-events-none z-5 bottom-0 left-13'
            src={Gadget}
            alt="Gadget"
          />
        </div>
      </div>


      {/* Laptop */}
      <div className="03 relative rounded-3xl col-span-2 bg-[#a303d4] py-10 px-15 flex flex-col justify-end">

        <img
          className='pointer-events-none rotate-10 absolute right-5 top-0 w-90'
          src={Laptop}
          alt="Laptop"
        />

        <div>
          <h3 className='text-xl text-[#9e9e9e]'>Travel</h3>

          <h2 className='text-white text-4xl font-bold z-100'>
            Devices
          </h2>

          <h1 className='text-[#ffffff5a] text-6xl font-bold uppercase'>
            Laptop
          </h1>

          <button className='py-2 mt-3 active:scale-95 hover:cursor-pointer rounded-3xl text-[#a303d4] px-5 bg-[#fffdfd]'>
            Browse
          </button>
        </div>
      </div>


      {/* Console */}
      <div className="04 relative rounded-3xl col-span-2 bg-[#dddfde] py-10 px-15 flex flex-col justify-center">

        <img
          className='pointer-events-none absolute right-20 top-4 w-50'
          src={Console2}
          alt="Gaming Console"
        />

        <div>
          <h3 className='text-xl text-[#040404]'>Best</h3>

          <h2 className='text-black text-4xl font-bold z-100'>
            Gaming
          </h2>

          <h1 className='text-[#ffffff] text-6xl font-bold uppercase'>
            Console
          </h1>

          <button className='py-2 mt-3 active:scale-95 hover:cursor-pointer rounded-3xl text-[#f7f5f8] px-5 bg-[#ed0707]'>
            Browse
          </button>
        </div>
      </div>


      {/* VR */}
      <div className="05 relative rounded-3xl bg-[#16d378] p-10 flex flex-col justify-start overflow-hidden">

        <img
          className='pointer-events-none absolute right-0 top-37 w-70'
          src={VR}
          alt="VR Headset"
        />

        <div>
          <h3 className='text-xl text-[#c7c1c1]'>Play</h3>

          <h2 className='text-white text-4xl font-bold z-100'>
            Game
          </h2>

          <h1 className='text-[#ffffff5a] text-5xl font-bold uppercase'>
            Oculus
          </h1>

          <button className='py-2 mt-3 active:scale-95 hover:cursor-pointer rounded-3xl text-[#16d378] px-5 bg-[#fdf8f8]'>
            Browse
          </button>
        </div>
      </div>


      {/* Speaker */}
      <div className="06 relative rounded-3xl bg-[#0567f9e8] p-10 flex flex-col justify-start overflow-hidden">

        <img
          className='pointer-events-none absolute right-3 top-37 w-40'
          src={Speaker}
          alt="Speaker"
        />

        <div>
          <h3 className='text-xl text-[#c7c1c1]'>New</h3>

          <h2 className='text-white text-4xl font-bold z-100'>
            Amazone
          </h2>

          <h1 className='text-[#ffffff5a] text-5xl font-bold uppercase'>
            Speaker
          </h1>

          <button className='py-2 mt-3 active:scale-95 hover:cursor-pointer rounded-3xl text-[#0567f9e8] px-5 bg-[#fdf8f8]'>
            Browse
          </button>
        </div>
      </div>

    </div>
  )
}

export default Section2