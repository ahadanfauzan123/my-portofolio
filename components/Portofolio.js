'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Portofolio({}) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  

  const [categories] = useState({
    netflixClone : [{
      id : 0,
      title : 'netflix clone',
      bg : 'bg-purple-500',
      img : '/netflix.jpg',
    }],
    disneyPlusClone : [{
      id : 1,
      title : "disney+ clone",
      bg : 'bg-red-500',
      img : '/netflix.jpg',
    }],
    spotifyRedesign : [{
      id : 2,
      title : 'spotify redesign',
      bg : 'bg-green-500',
      img : '/netflix.jpg',
    }],
    todoApp : [{
      id : 3,
      title : 'todo app',
      bg : 'bg-blue-500',
      img : '/netflix.jpg',
    }],
    airbnb : [{
      id : 4,
      title : 'airbnb clone',
      bg : 'bg-pink-500',
      img : '/netflix.jpg',
    }],
    moreTodoApp : [{
      id : 5,
      title : 'more todo app',
      bg : 'bg-yellow-400',
      img : '/netflix.jpg',
    }],
  })

  let id = []
  let getimg = []
  let getbg = []

  useEffect(() => {
    Object.values(categories).map((posts,idx) => {
      posts.map((post) => {
        
      id[idx] = [post?.title];
      getimg[idx] = [post?.img];
      getbg[idx] = [post?.bg];
      })
    })
  
    return () => {
      id,getimg
    }
  }, [categories,getimg,id,getbg])


  return (
    <div className=' min-w-full h-[calc(100vh+80px)]'>
      {/* title */}
      <div className='flex items-center justify-center w-[100%] h-[110px] bg-[#181717]/[.7] mt-20'>
        <h1 className='font-koulen text-[50px] text-white'>MY PORTOFOLIO</h1>
      </div>
      {/* body */}
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List className="portofolio-card flex ml-auto w-[87%] h-[74vh] justify-start items-center overflow-x-scroll">
        {Object.keys(categories).map((category,idx) => (
          <Tab key={category} className={({selected}) => (
            classNames(
              `relative mt-auto flex flex-col justify-center items-center h-[400px] cursor-pointer hover:-translate-y-4 duration-200 ${getbg[idx]}`,
              'card outline-none',
              selected ? 'w-[700px] -translate-y-4' : 'w-[140px]',
            )
          )}
          >
            {({selected}) => (
              <>
              <h1 className={
                selected ? 'hidden' : 'font-koulen -mt-2 text-[58px] w-[400px] rotate-90 z-40' 
              }>
                {id[idx]}
              </h1>
              {console.log('image ' + id[idx] + ' = ' + getimg[idx])}
              <Image src='/netflix.jpg' width={selected? 700 : 140 } height={600} className='absolute left-0 top-0 w-full h-full object-cover z-20' />
              
              </>
          )}
          
         </Tab>
        ))}
      </Tab.List>
      </Tab.Group>
    </div>
  )
}

export default Portofolio