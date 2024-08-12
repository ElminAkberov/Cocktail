'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    let [slice, setSlice] = useState(8)
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`/api/data`);
            const result = await res.json();
       
            setData(result);
            setLoading(false);
        }
        fetchData();
    }, []);
    const handleSlice = () => {
        setSlice(+slice + 4)
    }

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
        <div>
            <div className="">
                <video muted="" autoplay="" loop="infinite" playsinline="" src="https://cdn.shopify.com/videos/c/o/v/5326bf1cf19d4999bd710513e19d1730.mp4" className='absolute  top-0  w-full h-[60vh] object-cover left-0'></video>
                <div className='absolute bottom-20 left-0 w-full h-full flex items-center justify-center'>
                    <div className='z-20 text-center text-white'>
                        <p className='four text-[55px] max-lg:text-[45px] max-md:text-[35px] leading-[1.2] pb-1'>Here’s to exquisite cocktails, at home</p>
                        <p className='max-md:text-[15px] text-[18px]'>Award-winning cocktails crafted by our master mixologist. Just tear, pour and enjoy.</p>
                    </div>
                </div>
            </div>
            <div className=""></div>
            <h1 className='text-[55px] max-lg:text-[45px] max-md:text-[35px] four text-center mb-20'>Nio Cocktails.</h1>
            <div className="mb-20">
                <div className="lg:flex items-center mb-20 gap-x-10 cursor-pointer group">
                    <div className="lg:w-[50%] overflow-hidden ">
                        <img className='w-full object-cover max-h-[420px] group-hover:scale-110 duration-500 ' src="https://niococktails.co.uk/cdn/shop/files/Patrick-Pistolesi-Nio-Cocktails-2_2_1512x.jpg?v=1694508340" alt="" />
                    </div>
                    <div className="lg:w-[50%] max-lg:text-center">
                        <h3 className='text-[40px] max-lg:text-[30px] max-md:text-[24px] four'>WE ARE MIXOLOGISTS</h3>
                        <p className='text-[#787878] spartan text-[13px] max-md:text-[11px] leading-[2]'>Our Leading expert Mixologist is Patrick Pistolesi, owner of Drink Kong, ranked 16th in the World's 50 Best Bars. From the start he wanted to bring the art of mixology to NIO Cocktails. His extraordinary skill and iconic style are found in every cocktail and allow us to create a premium collection accessible to everyone.</p>
                    </div>
                </div>
                <div className="lg:flex items-center mb-20 gap-x-10 cursor-pointer group ">
                    <div className="lg:w-[50%] overflow-hidden order-2">
                        <img className='w-full object-cover max-h-[420px] group-hover:scale-110 duration-500 order-2' src="https://niococktails.co.uk/cdn/shop/files/nio-cocktails-summerbox-classics-hosting-party-house-14_2_640x.jpg?v=1694509510" alt="" />
                    </div>
                    <div className="lg:w-[50%] max-lg:text-center">
                        <h3 className='text-[40px] max-lg:text-[30px] max-md:text-[24px] four'>WE ARE PREMIUM</h3>
                        <p className='text-[#787878] spartan text-[13px] max-md:text-[11px] leading-[2]'>We only use premium spirits produced by the most important distillers in the world. We have an exclusive, authentic partnership with them that allows us to create our exemplary cocktails. We are proud to display the brands we use on the back of our packaging. And importantly, our cocktails don’t contain any additives or preservatives. All our cocktails are mixed in Italy, an intrinsic guarantee of renowned tradition and craftsmanship known all over the world.</p>
                    </div>
                </div>
                <div className="lg:flex items-center mb-20 gap-x-10 cursor-pointer group ">
                    <div className="lg:w-[50%] overflow-hidden">
                        <img className='w-full object-cover max-h-[420px] group-hover:scale-110 duration-500' src="https://niococktails.co.uk/cdn/shop/files/Progetto_senza_titolo_12_1080x.png?v=1694509923" alt="" />
                    </div>
                    <div className="lg:w-[50%] max-lg:text-center">
                        <h3 className='text-[40px] max-lg:text-[30px] max-md:text-[24px] four'>WE ARE ITALIAN</h3>
                        <p className='text-[#787878] spartan text-[13px] max-md:text-[11px] leading-[2]'>NIO Cocktails was the brainchild of ​​two Italian friends and our Made in Italy mixing is what distinguishes our unparalleled quality. We add the passion and savoir faire of Italian craftsmanship to each cocktail, putting the customer’s needs at the centre of our research. The taste experience, quality of ingredients and research make NIO Cocktails a perfect example of Italian excellence.</p>
                    </div>
                </div>
                <div className="lg:flex items-center mb-20 gap-x-10 cursor-pointer group">
                    <div className="lg:w-[50%] overflow-hidden order-2">
                        <img className='w-full object-cover max-h-[420px] group-hover:scale-110 duration-500 order-2' src="https://niococktails.co.uk/cdn/shop/files/nio-cocktails-sostenibilita_1512x.jpg?v=1694510497" alt="" />
                    </div>
                    <div className="lg:w-[50%] max-lg:text-center">
                        <h3 className='text-[40px] max-lg:text-[30px] max-md:text-[24px] four'>WE ARE SUSTAINABLE</h3>
                        <p className='text-[#787878] spartan text-[13px] max-md:text-[11px] leading-[2]'>The planet has always been at the centre of our product packaging decisions. We wanted our packaging to be iconic and different, but also light and compact, so it can be easily transported resulting in lower emissions. We are also committed to using recyclable packaging, only FSC® certified paper from responsibly managed forests, recyclable packaging, and we are a carbon-neutral certified company. We believe in the principles of corporate, social and ecological responsibility. Our actions, products and services are based on a People-Planet-Profit approach.</p>
                    </div>
                </div>
            </div>
            <h3 className='text-[55px] max-lg:text-[45px] max-md:text-[35px] four text-center mb-20'>Cocktails.</h3>
            {console.log(data)}
            <div className="flex relative justify-between">
                <div className='grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10 w-full'>
                    {data?.cocktail?.slice(0, slice)?.map((item, index) => (
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
                            <div key={`${index}`}>
                                <Link href={`/cocktail/${item.name}`} className='group'>
                                    <article >
                                        <div className="overflow-hidden">
                                            <img src={item.img} className='group-hover:scale-110 duration-500' alt={`Cocktail ${index}`} />
                                        </div>
                                        <h3 className='four text-[25px]'>{item.name}</h3>
                                        <p className='four text-[20px] font-bold'>£39.99</p>
                                        <p className='text-[#787878] font'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, laudantium.</p>
                                        <button className='bg-[#363234] w-full text-[14px] mt-5 group-hover:bg-white group-hover:text-black duration-500 hover:shadow-xl flex justify-center items-center gap-x-2   text-[white] p-3 px-10 spartan font-bold'>Learn More <FaArrowRight className='group-hover:right-[-10px] relative right-0 duration-300' /></button>
                                    </article>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={handleSlice} className='bg-[#363234] mx-auto text-[14px] mt-5 hover:bg-white hover:text-black duration-500 hover:shadow-xl flex justify-center items-center gap-x-2   text-[white] p-3 px-10 spartan font-bold'>More </button>
        </div>
    );
}
