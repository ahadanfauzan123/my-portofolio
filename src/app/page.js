'use client'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Portofolio from '../../components/Portofolio'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Svgone from '../../components/svg/Svgone'
import Example from '../../components/headlessui/tabs'
import Svgtwo from '../../components/svg/Svgtwo'
import React, { useRef } from 'react'
import Link from 'next/link'

const style = {
  container : "#fixed flex justify-between items-center bg-[#$181717]/[.7] h-[90px] w-[96vw] mx-auto mt-4 z-50",
  menuList : 'text-[18px] text-semibold',
}

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between scroll-smooth">
      {/* svg */}
      <div className='absolute right-0 top-0 z-0'>
        <Svgone />
      </div>
      <div className='absolute left-0 translate-y-[390px] -z-40'>
        <Svgtwo />
      </div>

      {/* navbar done */}
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
      {/* header done */}
      <Header id="section1" />
      {/* portofolio */}
      <Portofolio id="section2" />
      
      {/* contact */}
      <Contact id="section3" />
      {/* footer */}
      <Footer />


    </main>
  )
}
