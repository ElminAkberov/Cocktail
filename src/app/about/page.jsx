import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
      <div className=''>
        <img src="https://niococktails.co.uk/cdn/shop/files/nio-cocktails-core2024-banner-desktop_993c9cc5-f1b8-4881-9219-8c0e8aa9bd78_2760x.jpg?v=1713439368" className='absolute top-0 w-full h-[60vh] object-cover left-0' alt="" />
        <div className='absolute bottom-20 left-0 w-full h-full flex items-center justify-center'>
          <div className='z-20 text-center text-white'>
            <p className='four text-[55px] max-lg:text-[45px] max-md:text-[35px] leading-[1.2] pb-1'>Art in a Glass</p>
            <p className='max-md:text-[15px] text-[18px]'>Experience the fusion of flavor and creativity.</p>
          </div>
        </div>
        <div className='absolute top-0 left-0 h-[60vh] w-full  bg-black opacity-50'></div>
      </div>
      <h1 className='four text-[55px] max-lg:text-[45px] max-md:text-[35px] text-center'>About.</h1>
      <div className='spartan md:text-[20px]  my-4'>
        <p className='mb-4'>We are ready-to-sip premium cocktails premixed in Italy with carefully selected spirits and ingredients. We offer the best premium bar-quality cocktail experience.</p>
        <p className='mb-4'>At home or on the go, we&apos;re revolutionising cocktail culture to create memorable experiences to enjoy for everyone, anywhere with our attractive packaging and original taste.</p>
        <p className='mb-4'>After all, you deserve a premium bar experience right from the comfort of your home or wherever you want to be.</p>
        <p className='mb-4'>All you need is the right company and ice!</p>
      </div>
    </>
  )
}

export default About