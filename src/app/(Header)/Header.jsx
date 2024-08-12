"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';


const Navbar = () => {
    const [data, setData] = useState(null);
    let [value, setValue] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const [fix, setFix] = useState(false);
    const [open, setOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY) {
                setFix(true)
            } else {
                setFix(false)
            }
        }
        window.onscroll = handleScroll

        async function fetchData() {
            const res = await fetch(`/api/data`);
            const result = await res.json();
            setData(result);
        }
        fetchData();
    }, [])

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            <nav className={` spartan    duration-[500ms] py-4 ${fix ? "fixed z-40 w-full shadow-lg bg-black  right-0 left-0  text-[#24126A] " : " bg-transparent absolute w-full z-40"}`}>
                <div className={`max-w-[1320px] px-custom max-md:pl-custom max-[1400px]:max-w-[1140px] max-[1200px]:max-w-[960px]  max-lg:max-w-[720px] max-md:max-w-[450px] mx-auto   flex   justify-between items-center duration-300`}>
                    <div className=" w-[200px] max-lg:w-[190px] max-md:w-[180px]"><Link href={"/"}><svg className='w-[83px] h-[45px]' fill='white' viewBox="0 0 99 53" xmlns="http://www.w3.org/2000/svg">
                        <title>Premium Ready Made Cocktails from NIO Cocktails</title>
                        <g fill-rule="nonzero"><path d="M3.34 53A3.28 3.28 0 0 1 0 49.66a3.31 3.31 0 0 1 3.38-3.37 3.39 3.39 0 0 1 2.57 1l-.91 1a2.41 2.41 0 0 0-1.66-.73 1.91 1.91 0 0 0-1.88 2 1.93 1.93 0 0 0 1.88 2 2.36 2.36 0 0 0 1.71-.77l.91.92A3.29 3.29 0 0 1 3.34 53zM15.51 53a3.32 3.32 0 0 1-3.45-3.33 3.36 3.36 0 0 1 3.46-3.37A3.34 3.34 0 0 1 19 49.59 3.37 3.37 0 0 1 15.51 53zm2-3.36a2 2 0 0 0-2-2 2 2 0 0 0 .05 4 1.94 1.94 0 0 0 1.95-2zM28.54 53a3.29 3.29 0 0 1-3.34-3.34 3.51 3.51 0 0 1 5.95-2.37l-.91 1.06a2.33 2.33 0 0 0-1.66-.73 1.92 1.92 0 0 0-1.88 2 1.93 1.93 0 0 0 1.89 2 2.35 2.35 0 0 0 1.7-.76l.92.91A3.32 3.32 0 0 1 28.54 53zM41.8 52.82l-2-2.77-.75.78v2H37.6v-6.5H39v2.84l2.63-2.85h1.73l-2.64 2.76 2.77 3.74zM52.38 47.61v5.19H51v-5.18h-2V46.3h5.38v1.32zM65.36 52.77l-.59-1.45H62l-.59 1.46H60l2.77-6.55h1.32l2.8 6.54h-1.53zm-2-4.82l-.86 2.11h1.72l-.86-2.11zM73.18 52.76v-6.5h1.42v6.5zM81.48 52.74v-6.5h1.42v5.2h3.24v1.3zM94.79 52.81a4.12 4.12 0 0 1-2.76-1l.85-1a2.94 2.94 0 0 0 1.94.79c.58 0 .94-.23.94-.61 0-.36-.23-.55-1.31-.83-1.31-.33-2.16-.69-2.16-2a2 2 0 0 1 2.27-2A3.74 3.74 0 0 1 97 47l-.77 1a3 3 0 0 0-1.69-.64c-.55 0-.83.25-.83.57 0 .42.28.56 1.4.85 1.32.34 2.06.81 2.07 2 0 1.31-.98 2.03-2.39 2.03zM22 25.22L1.92.64 1.83.53H.41l.05 31.11H3.4L3.35 6.95 23.47 31.5l.09.1h1.34L24.85.49h-2.9zM45.93.45l2.89-.005.055 31.11-2.89.004zM98.26 15.91c.017 8.803-7.107 15.953-15.91 15.97-8.803.017-15.953-7.107-15.97-15.91C66.363 7.167 73.487.017 82.29 0a15.93 15.93 0 0 1 15.97 15.91zm-16-13c-7.218.033-13.043 5.912-13.01 13.13.033 7.218 5.912 13.043 13.13 13.01 7.218-.033 13.043-5.912 13.01-13.13A13.07 13.07 0 0 0 82.3 2.87l-.04.04z"></path></g>
                    </svg></Link></div>
                    <div className="lg:hidden ">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white">{isOpen ? <IoCloseOutline className={`${fix && "text-white"} text-[50px] pt-2`} /> : <IoReorderThreeOutline className={`${fix && "text-white"} text-[50px] pt-2`} />}</button>
                        <div style={{ margin: "80px 0" }} className={`lg:hidden w-full absolute z-20 top-0 right-0 mt-[100px]`}>
                            <div className={`${isOpen ? `py-[10px] ${open ? "max-h-[450px]" : "max-h-[210px]"}  ` : "max-h-[0px] py-[0px] "} text-black  overflow-hidden duration-500 bg-white  px-[20px] rounded-[8px]  text-[15px]  max-w-[1320px] max-[1400px]:max-w-[1140px] max-[1200px]:max-w-[960px] max-lg:max-w-[700px] between max-md:max-w-[430px] max-[450px]:mx-custom mx-auto `}>
                                <div className='overflow-hidden'>
                                    <p className="px-4 py-[12px] hover:opacity-75 font-bold"><Link href={"/"} >HOME</Link></p>
                                    <p className="px-4 py-[12px] hover:opacity-75 font-bold"><Link href={"/about"} >ABOUT</Link></p>
                                    <p className="px-4 py-[12px] hover:opacity-75 font-bold"><Link href={"/contact"}>CONTACT US</Link></p>
                                    <div onClick={handleOpen} className="px-4 py-[12px]  font-bold"><p>SEARCH COCKTAIL</p></div>
                                    <div className={`${open ? "opacity-100" : "opacity-0 "} shadow-lg duration-500 `}>
                                        <div className="px-4 py-[12px] font-bold border-2 border-black rounded-full"><p><input onInput={(e) => { setValue(e.target.value) }} className='w-full outline-none' type="text" /></p></div>
                                        <div className="max-w-[450px] mx-auto relative">
                                            {
                                                data?.cocktail?.filter(item => item.name.toLowerCase().includes(value.toLowerCase())).slice(0, 3).map((item,index) => (
                                                    <div key={index} className='flex items-center justify-between my-2'>
                                                        <div className="flex items-center">
                                                            <img src={`${item.img}`} width={50} alt="" />
                                                            <h3 className='ml-3 font-bold'>{item.name}</h3>
                                                        </div>
                                                        <div >
                                                            Cocktail
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex max-lg:hidden  text-white  font-bold text-[15px]`}>
                        <p className="pr-5 py-[12px]" ><Link href={"/"} className={"hover:opacity-75 duration-500"}>HOME</Link></p>
                        <p className="px-5 py-[12px]" ><Link href={"/about"} className={"hover:opacity-75 duration-500"}>ABOUT</Link></p>
                        <p className="px-5 py-[12px]" ><Link href={"/contact"} className={"hover:opacity-75 duration-500"}>CONTACT US</Link></p>
                        <div className="px-5 py-[12px] cursor-pointer"><p onClick={handleOpen} className={"hover:opacity-75 duration-500"}>SEARCH COCKTAIL</p></div>
                    </div>
                    <div className="max-md:hidden group  font-bold ">
                        <Link href={"/cocktail"}>
                            <button className={`bg-transparent  duration-500  ${fix ? "hover:text-[black] hover:bg-[#fff]" : "hover:bg-[#000]"}  text-[#fff] text-[14px] py-[14px] px-[30px] rounded-full`}>
                                <span className='group-hover:opacity-75 duration-500'>Get Started</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className={`bg-white top-0 z-50 shadow-lg text-black absolute w-full ${!open ? "-translate-y-[55vh]" : "max-lg:hidden"}  duration-500 rounded-b-[100px] left-0 h-[50vh]`}>
                    <h3 className='text-[45px] max-lg:text-[35px] max-md:text-[25px] four text-center mb-2'>Search Cocktails.</h3>
                    <button onClick={handleOpen} className='absolute right-5 top-5 text-[30px]'><MdClose /></button>
                    <div className="flex justify-center max-w-[450px] mx-auto">
                        <input onInput={(e) => { setValue(e.target.value) }} type="text" className='border-black border-2 p-2 outline-none w-full' />
                    </div>
                    <div className="max-w-[450px] mx-auto relative">
                        {
                            data?.cocktail?.filter(item => item.name.toLowerCase().includes(value.toLowerCase())).slice(0, 3).map((item,index) => (
                                <div key={index} className='flex items-center justify-between my-2'>
                                    <div className="flex items-center">
                                        <img src={`${item.img}`} width={50} alt="" />
                                        <h3 className='ml-3 font-bold'>{item.name}</h3>
                                    </div>
                                    <div >
                                        Cocktail
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
