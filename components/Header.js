'use client'
import Image from 'next/image'
import React from 'react'
import me from '../public/images/me.png'
// icons
import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai'
import { TbBrandFiverr } from 'react-icons/tb'
import { BsArrowDown } from 'react-icons/bs'


const style = {
      leftButton : 'flex items-center justify-start pl-14 text-xl font-semibold gap-x-3  w-full h-[72px] bg-gradient-to-tr from-gray-900 to-gray-700 bg-[position:_0%_0%] hover:bg-[position:_100%_150%] bg-[size:_120%] transition-all duration-500 rounded-[12px] cursor-pointer',
}

function Header() {
  return (
    <div className='relative h-[100vh] w-[82vw] mx-auto flex flex-col items-center justify-center'>
      <div className='flex justify-between z-20'>
            {/* kata kata */}
            <div className='flex flex-[0.5] flex-col items-start justify-start'>
                  <h2 className='font-koulen text-[36px] -mb-8'>FULLSTACK DEVELOPER</h2>
                  <h1 className='text-[62px] font-semibold text-[#00a1f8]'>muhammad ahadan</h1>
                  <div className='h-[5px] w-[20%] rounded-lg bg-white -mt-2' />
                  <p className='w-[48%] mt-[25px] text-md'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam sint itaque sunt voluptatum quibusdam sequi eius illo porro, blanditiis eaque consequatur quia expedita, illum rerum suscipit esse corrupti odio perferendis voluptatibus commodi. Veritatis rem itaque maxime ad corporis maiores, nulla delectus ipsa harum animi consequuntur excepturi veniam nihil pariatur?
                  </p>
                  <div className='mt-6 text-xl font-semibold w-[30%] h-[55px] rounded-[50px] flex justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white '>
                        <div className='flex items-center justify-center gap-x-[10px] animate-pulse delay-100'>
                              <h4>hire me</h4>
                              <BsArrowDown className='text-3xl -rotate-90 font-bold' />
                        </div>
                  </div>
            </div>
            {/* buttons */}
            <div className='flex flex-[0.19] flex-col items-center justify-center space-y-3'>
                  <div className={style.leftButton}>
                        <AiFillGithub className='text-4xl' />
                        <h3 className='font-semibold ml-1'>Github</h3>
                  </div>
                  <div className={style.leftButton}>
                        <AiFillLinkedin className='text-4xl' />
                        <h3 className='font-semibold ml-1'>LinkedIn</h3>
                  </div>
                  <div className={style.leftButton}>
                        <TbBrandFiverr className='text-[32px] -translate-y-[1px]' />
                        <h3 className='font-semibold ml-1'>Fiverr</h3>
                  </div>
            </div>
      </div>
      {/* gambar */}
      <div className='absolute  h-[638px] w-[522px] z-10'>
            <Image src={me} alt='me' />
      </div>
    </div>
  )
}

export default Header