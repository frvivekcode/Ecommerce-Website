import React from 'react'

const Section3 = () => {
  return (
    <div className='h-[calc(100vh-5rem)] bg-[#ffffff] w-full'>
      <div className="headlines bg-[#ffff]  flex items-center px-10 justify-between h-[80px] w-[100%]">
        <div className='flex gap-3'>
          <i class="text-red-500 text-5xl ri-bus-fill"></i>
        <div className=''>
          <h3 className='font-bold text-xl'>Free Shipping</h3>
        <p className='text-[#8f8f8f]'>Free shipping on first order </p>
        </div>
        </div>
        <div className="money flex gap-3">
          <i class="text-red-500 text-5xl ri-check-fill"></i>
          <div>
            <h3 className='font-bold text-xl'>Money Guarantee</h3>
          <p className='text-[#8f8f8f]'>30 Day money back</p>
          </div>
        </div>
        <div className="online-support flex gap-3">
          <i class="text-red-500 text-5xl ri-headphone-fill"></i>
          <div>
            <h3 className='font-bold text-xl'>Online support 24/7</h3>
          <p className='text-[#8f8f8f] '>Technical support 24/7</p>
          </div>
        </div>
        <div className="secure-payment flex gap-3">
          <i class="text-red-500 text-5xl ri-wallet-3-line"></i>
          <div>
            <h3 className='font-bold text-xl'>Secure Payment</h3>
          <p className='text-[#8f8f8f]'>All card accepted</p>
          </div>
        </div>
      </div>
      <div className="red-box w-[95%] mx-auto mt-50 h-[350px] rounded-2xl bg-[#f80a0ae2]">

      </div>
    </div>



  )
}

export default Section3
