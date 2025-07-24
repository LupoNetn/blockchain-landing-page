import React from 'react'
import partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
import partner4 from '../assets/partner4.png'
import partner5 from '../assets/partner5.png'

const partnerImg = [
    {src: partner1, alt: 'Partner 1'},
    {src: partner2, alt: 'Partner 2'},
    {src: partner3, alt: 'Partner 3'},
    {src: partner4, alt: 'Partner 4'},
    {src: partner5, alt: 'Partner 5'},
]

const Partners = () => {
  return (
    <>
     <section className='bg-gray-dark px-6 py-10'>
        <div>
            <p className='text-center text-3xl text-gray max-mb:text-xl'>Satisfied partners</p>
        </div>
        <div className='flex flex-wrap gap-10 max-mb:gap-5 justify-center items-center'>
            {partnerImg.map(({src,alt}, index) => (
                <div key={index} className='flex justify-center items-center'>
                    <img src={src} alt={alt} className='w-8 h-8 m-4' />
                    <p className='text-gray max-mb:hidden'>LogoIpsum</p>
                </div>
            ))}
        </div>
     </section>
    </>
  )
}

export default Partners
