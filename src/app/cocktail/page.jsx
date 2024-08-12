'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
export default function Page() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`/api/data`);
            const result = await res.json();
            setData(result);
            setLoading(false);
        }
        fetchData();
    }, []);
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    if (loading) {
        return (
            <div className=''>
                <div className='border-black h-[95vh] flex justify-center items-center'>
                    <div className='text-[25px] fixed  flex justify-center flex-col  w-full top-[20%] animate-bounce text-center'>
                        <span className='four text-[25px] mb-10'>NIO Cocktails.</span>
                        <img className='w-[100px] mx-auto animate-bounce' src="/load.png" alt="Loading" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className=''>
            <div className=''>
                <img src="https://niococktails.co.uk/cdn/shop/files/nio-cocktails-postcards-from-hawaii-cocktails-box-pouring_16_9_1080x.jpg?v=1717663793" className='absolute top-0 w-full h-[60vh] object-cover left-0' alt=""
                />
                <div className='absolute bottom-20 left-0 w-full h-full flex items-center justify-center'>
                    <div className='z-20 text-center text-white'>
                        <p className='four text-[55px] max-lg:text-[45px] max-md:text-[35px] leading-[1.2] pb-1'>Your Cocktail Journey Starts Here</p>
                        <p className='max-md:text-[15px] text-[18px]'>Experience the art of mixology with every sip.</p>
                    </div>
                </div>
                <div className='absolute top-0 left-0 h-[60vh] w-full  bg-black opacity-50'></div>
            </div>
            <h1 className='text-[55px] max-lg:text-[45px] max-md:text-[35px] four text-center mb-20'>Cocktails.</h1>
            <div className="flex justify-between  ">
                <div className='grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10 w-full'>
                    {data?.cocktail?.map((item, index) => (
                        <div key={index} data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
                            <div key={`${index}`}>
                                <Link href={`/cocktail/${item.name}`} className='group'>
                                    <article>
                                        <div className="overflow-hidden">
                                            <img src={item.img} className='group-hover:scale-110 duration-500' alt={`Cocktail ${index}`} />
                                        </div>
                                        <h3 className='four text-[25px]'>{item.name}</h3>
                                        <p className='four text-[20px] font-bold'>£39.99</p>
                                        <p className='text-[#787878] font'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, laudantium.</p>
                                        <button className='bg-[#363234] w-full text-[14px] mt-5 group-hover:bg-white group-hover:text-black duration-500 hover:shadow-xl flex justify-center items-center gap-x-2   text-[white] p-3 px-10 spartan font-bold'>Learn More <FaArrowRight className='group-hover:right-[-10px] relative right-0 duration-300' /></button>
                                    </article>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
