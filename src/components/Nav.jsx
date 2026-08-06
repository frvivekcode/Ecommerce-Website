import React from 'react'

const Nav = () => {
  return (
    <div className='h-[80px] sticky z-50 top-0 w-[100] flex px-4 items-center justify-between bg-[#ffff]'>
      <div className="navlinks flex gap-14 text-[18px]">
        <div className="logo"><h1 className='font-bold text-2xl text-[#c60000]'>P H L O X</h1></div>
        <a className='font-bold' href="#">Home</a>
        <a className='text-[#a8a7a7]' href="#">About Us</a>
        <a className='text-[#a8a7a7]' href="#">Shop</a>
        <a className='text-[#a8a7a7]' href="#">Blog</a>
        <a className='text-[#a8a7a7]' href="#">Contact Us</a>
      </div>
      <div className="loginShoping flex gap-3">
        <a href="#">Login</a>
        <i class="ri-search-line"></i>
        <i class="ri-shopping-bag-fill"></i>
      </div>
    </div>
  )
}

export default Nav
