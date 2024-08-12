"use client"
import { useParams, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaAlignLeft, FaArrowRight } from 'react-icons/fa';
import { MdClose } from "react-icons/md";
const Page = () => {
  let params = useParams()
  const [data, setData] = useState([])
  let [loading, setLoading] = useState(true)
  let [open, setOpen] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/data`);
      const result = await res.json();
      setData(result);
    }
    fetchData();
  }, []);
  const handleClick = () => {
    setOpen(!open)

    let timer = setTimeout(() => {
      setLoading(false)
    }, 5000)
    return () => clearTimeout(timer)
  }

  return (
    <div>
      <div className="">
        <img src="https://niococktails.co.uk/cdn/shop/files/gift-card-nio-cocktails-pack-desktop_2760x.jpg?v=1671471254" className='absolute  top-0  w-full h-[60vh] object-cover left-0' alt="" />
        <div className='absolute bottom-20 left-0 w-full h-full flex items-center justify-center'>
          <div className='z-20 text-center text-white'>
            <p className='four text-[55px] max-lg:text-[45px] max-md:text-[35px] leading-[1.2] pb-1'>Taste the Difference</p>
            <p className='max-md:text-[15px] text-[18px]'>Premium cocktails made with passion and precision.</p>
          </div>
        </div>
        <div className='absolute top-0 left-0 h-[60vh] w-full  bg-black opacity-50'></div>
      </div>
      {
        data?.cocktail?.filter(item => item.name == params.id)
          .map((filteredItem,index) => (
            <div key={index} className='lg:flex'>
              <img className='lg:w-[40%]' src={`${filteredItem.img}`} alt="" />
              <div className='lg:w-[60%] '>
                <h3 className='text-[55px] max-lg:text-[45px] max-md:text-[35px] four text-center'>{filteredItem.name} Cocktail</h3>
                <div className="lg:ml-20 text-[20px] max-md:text-[16px]">
                  <p className='spartan'><span className='four font-bold text-[30px] max-md:text-[20px]'>Price</span> : £39.99</p>
                  <p className='mb-5 spartan'><span className='four font-bold text-[30px] max-md:text-[20px]'>Description</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, laudantium.</p>
                  <p className='mb-5 spartan'><span className='four font-bold text-[30px] max-md:text-[20px]'>Ingredients</span> : {filteredItem.ingr.join(', ')}</p>
                  <button onClick={handleClick} className='bg-[#363234] hover:bg-white hover:text-black duration-500 hover:shadow-xl flex items-center gap-x-2 group  text-[white] p-3 px-10 spartan font-bold'>Let&apos;s make <FaArrowRight className='group-hover:right-[-10px] relative right-0 duration-300' /></button>
                </div>
              </div>

              <div className={`fixed ${!open ? "opacity-0 invisible" : "opacity-100"}  duration-500 max-w-[1320px] py-5 px-10 max-md:px-5  max-[1400px]:max-w-[1140px] max-[1200px]:max-w-[960px]  max-lg:max-w-[720px] max-md:max-w-[450px] mx-auto h-[auto] z-40 top-20 left-0 right-0 w-full bg-[#efefef] shadow-xl `}>
                <MdClose onClick={() => setOpen(!open)} size={30} className='float-right relative z-30 cursor-pointer' />
                <div className={` duration-500 ${loading ? 'fade-in' : 'fade-out hidden'}`}>
                  <div className="flex justify-center horizontal-shake">
                    <div className='overflow-hidden relative'>
                      <img src="/shakers.png" className='w-[350px] max-lg:w-[300px] max-md:w-[200px] duration-300 mt-10' alt="Shakers" />
                    </div>
                  </div>
                  <h3 className='text-center py-5 four text-[35px] font-bold'>A cocktail is being made</h3>
                </div>

                <div className={` duration-500 ${loading ? 'fade-out hidden' : 'fade-in'}`}>
                  <div className="flex justify-center">
                    <img className='w-full h-[50vh] object-contain' src={`${filteredItem.img}`} alt="" />
                  </div>
                  <h3 className='text-center mt-5 four text-[35px]'>
                    <span className='font-bold'>{filteredItem.name}</span> <span>cocktail is ready for drink</span>
                  </h3>
                  <p className='text-center mb-5 four text-[#333] text-[25px]'>Ingredients : {filteredItem.ingr.join(', ')}</p>
                </div>


              </div>

            </div>
          ))
      }</div>
  )
}

export default Page