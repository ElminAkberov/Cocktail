import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Contact = () => {
    return (
        <>
            <div className=''>
                <img src="https://niococktails.co.uk/cdn/shop/files/DESKTOP_BANNER_ABOUT_US_NEW_1728x.jpg?v=1663766894" className='absolute top-0 w-full h-[60vh] object-cover left-0' alt=""
                />
                <div className='absolute bottom-20 left-0 w-full h-full flex items-center justify-center'>
                    <div className='z-20 text-center text-white'>
                        <p className='four text-[55px] max-lg:text-[45px] max-md:text-[35px] leading-[1.2] pb-1'>Crafted Cocktails, Curated Perfection</p>
                        <p className='max-md:text-[15px] text-[18px]'>Discover unique flavors and elevate your drinking experience.</p>
                    </div>
                </div>
                <div className='absolute top-0 left-0 h-[60vh] w-full  bg-black opacity-50'></div>
            </div>
            <div className='four relative text-[55px] max-lg:text-[45px] max-md:text-[35px] text-center'>Contact.</div>
            <div className="text-[25px] overflow-hidden relative max-lg:text-[20px] max-md:text-[15px] spartan">
                <div className=" flex mb-4 hover:text-[#386cee] duration-500 hover:underline cursor-pointer items-center">
                    <MdOutlineEmail className='text-[30px] max-lg:text-[25px] ' />
                    <Link className='mt-1' href={"mailto:ekberovelmin04@gmail.com"}>ekberovelmin04@gmail.com</Link>
                </div>
                <div className=" flex mb-4 hover:text-[#386cee] duration-500 hover:underline cursor-pointer items-center">
                    <FaLinkedin className='text-[30px] max-lg:text-[25px] ' />
                    <Link className='mt-1' target='_blank' href={"https://www.linkedin.com/in/elmin-ekberov-a0842b24b/"}>Elmin Akberov</Link>
                </div>
                <div className=" flex mb-4 hover:text-[#386cee] duration-500 hover:underline cursor-pointer items-center">
                    <FaGithub className='text-[30px] max-lg:text-[25px] ' />
                    <Link className='mt-1' target='_blank' href={"https://github.com/ElminAkberov"}>Elmin Akberov</Link>
                </div>
                <div className=" flex mb-4 hover:text-[#386cee] duration-500 hover:underline cursor-pointer items-center">
                    <FaTelegram className='text-[30px] max-lg:text-[25px] ' />
                    <Link className='mt-1' href={"/"}>+994(50)6214511</Link>
                </div>

            </div>
        </>
    )
}

export default Contact