import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { PiInstagramLogoLight } from 'react-icons/pi'
import { TiSocialFacebook } from 'react-icons/ti'

function Footer() {
    return (
        <div>
            <div className="bg-[#fafafa] border-t-2 pt-20 pb-10 max-md:py-10 max-md:text-center text-black">
                <div className="max-w-[1320px]  justify-between px-custom max-md:pl-custom max-[1400px]:max-w-[1140px] max-[1200px]:max-w-[960px]  max-lg:max-w-[720px] max-md:max-w-[450px] mx-auto">
                    <div className="md:grid grid-cols-4 max-lg:grid-cols-2  gap-x-5">
                        <div className="dm-sans ">
                        <Link href={"/"}><svg className='w-[83px] h-[45px]' viewBox="0 0 99 53" xmlns="http://www.w3.org/2000/svg">
                        <title>Premium Ready Made Cocktails from NIO Cocktails</title>
                        <g fill-rule="nonzero"><path d="M3.34 53A3.28 3.28 0 0 1 0 49.66a3.31 3.31 0 0 1 3.38-3.37 3.39 3.39 0 0 1 2.57 1l-.91 1a2.41 2.41 0 0 0-1.66-.73 1.91 1.91 0 0 0-1.88 2 1.93 1.93 0 0 0 1.88 2 2.36 2.36 0 0 0 1.71-.77l.91.92A3.29 3.29 0 0 1 3.34 53zM15.51 53a3.32 3.32 0 0 1-3.45-3.33 3.36 3.36 0 0 1 3.46-3.37A3.34 3.34 0 0 1 19 49.59 3.37 3.37 0 0 1 15.51 53zm2-3.36a2 2 0 0 0-2-2 2 2 0 0 0 .05 4 1.94 1.94 0 0 0 1.95-2zM28.54 53a3.29 3.29 0 0 1-3.34-3.34 3.51 3.51 0 0 1 5.95-2.37l-.91 1.06a2.33 2.33 0 0 0-1.66-.73 1.92 1.92 0 0 0-1.88 2 1.93 1.93 0 0 0 1.89 2 2.35 2.35 0 0 0 1.7-.76l.92.91A3.32 3.32 0 0 1 28.54 53zM41.8 52.82l-2-2.77-.75.78v2H37.6v-6.5H39v2.84l2.63-2.85h1.73l-2.64 2.76 2.77 3.74zM52.38 47.61v5.19H51v-5.18h-2V46.3h5.38v1.32zM65.36 52.77l-.59-1.45H62l-.59 1.46H60l2.77-6.55h1.32l2.8 6.54h-1.53zm-2-4.82l-.86 2.11h1.72l-.86-2.11zM73.18 52.76v-6.5h1.42v6.5zM81.48 52.74v-6.5h1.42v5.2h3.24v1.3zM94.79 52.81a4.12 4.12 0 0 1-2.76-1l.85-1a2.94 2.94 0 0 0 1.94.79c.58 0 .94-.23.94-.61 0-.36-.23-.55-1.31-.83-1.31-.33-2.16-.69-2.16-2a2 2 0 0 1 2.27-2A3.74 3.74 0 0 1 97 47l-.77 1a3 3 0 0 0-1.69-.64c-.55 0-.83.25-.83.57 0 .42.28.56 1.4.85 1.32.34 2.06.81 2.07 2 0 1.31-.98 2.03-2.39 2.03zM22 25.22L1.92.64 1.83.53H.41l.05 31.11H3.4L3.35 6.95 23.47 31.5l.09.1h1.34L24.85.49h-2.9zM45.93.45l2.89-.005.055 31.11-2.89.004zM98.26 15.91c.017 8.803-7.107 15.953-15.91 15.97-8.803.017-15.953-7.107-15.97-15.91C66.363 7.167 73.487.017 82.29 0a15.93 15.93 0 0 1 15.97 15.91zm-16-13c-7.218.033-13.043 5.912-13.01 13.13.033 7.218 5.912 13.043 13.13 13.01 7.218-.033 13.043-5.912 13.01-13.13A13.07 13.07 0 0 0 82.3 2.87l-.04.04z"></path></g>
                    </svg></Link>
                            {/* <Link href="/"><img src={`/logo.webp`} className="max-md:mx-auto pt-10 w-[200px] max-lg:w-[190px] max-md:w-[180px]" alt="" /></Link> */}
                            <p className='text-[15px] py-5'>Making the world a better place through constructing elegant hierarchies.</p>
                            <h2 className='spartan text-[13px] pb-4'>Follow Us On:</h2>
                            <div className="flex cursor-pointer max-md:justify-center gap-x-3">
                                <TiSocialFacebook size={20} className='hover:text-[#3E80FF] duration-300' />
                                <PiInstagramLogoLight size={20} className='hover:text-[#3E80FF] duration-300' />
                                <FaTwitter size={20} className='hover:text-[#3E80FF] duration-300' />
                                <FaLinkedin size={20} className='hover:text-[#3E80FF] duration-300' />
                                <FaPinterest size={20} className='hover:text-[#3E80FF] duration-300' />
                                <FaYoutube size={20} className='hover:text-[#3E80FF] duration-300' />
                            </div>
                        </div>
                        <div className="dm-sans ">
                            <h2 className='spartan py-5'>Solutions</h2>
                            <p className='pb-3 cursor-pointer w-max hover:underline'>Marketing</p>
                            <p className='pb-3 cursor-pointer w-max hover:underline'>Analytics</p>
                            <p className='pb-3 cursor-pointer w-max hover:underline'>Commerce</p>
                            <p className='pb-3 cursor-pointer w-max hover:underline'>Insights</p>
                        </div>
                        <div className="dm-sans  ">
                            <h2 className='spartan py-5'>Support</h2>
                            <Link href={"/"} className='pb-3 w-max block hover:underline  '>Home</Link>
                            <Link href={"/about"} className='pb-3 w-max block hover:underline '>About</Link>
                            <Link href={"/contact"} className='pb-3 w-max block hover:underline '>Contact</Link>
                            <Link href={""} className='pb-3 w-max block hover:underline '>Guides</Link>
                        </div>
                        <div className="dm-sans ">
                            <h2 className='spartan py-5'>Subscribe</h2>
                            <p>Subscribe to our newsletter for the latest updates</p>
                        </div>

                    </div>
                    <hr className='mt-10' />
                    <div className="dm-sans flex justify-between mt-3">
                        <p>© 2024 Cocktail Project - All Rights Reserved</p>
                        <p>Developed by <Link className={"underline hover:no-underline"} target='_blank' href={"https://github.com/ElminAkberov"}> Elmin Akberov</Link></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer