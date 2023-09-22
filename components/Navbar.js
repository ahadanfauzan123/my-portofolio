import Link from 'next/link'
import React from 'react'

const style = {
      container : "#fixed flex justify-between items-center bg-[#$181717]/[.7] h-[90px] w-[96vw] mx-auto mt-4 z-50",
      menuList : 'text-[18px] text-semibold',
}

function Navbar() {
  return (
    <div className={style.container}>
      <div className='ml-6'>
            <h1 className='text-[28px]'>ahadan</h1>
      </div>
      <div className='mr-6 flex flex-[0.28] justify-between'>
            <h4 className={style.menuList}><Link href="#section1" scroll={true} className={style.a}>services</Link></h4>
            <h4 className={style.menuList}><Link href="#section2" scroll={true} className={style.a}>portofolio</Link></h4>
            <h4 className={style.menuList}><Link href="#section3" scroll={true} className={style.a}>contact</Link></h4>
      </div>
    </div>
  )
}

export default Navbar