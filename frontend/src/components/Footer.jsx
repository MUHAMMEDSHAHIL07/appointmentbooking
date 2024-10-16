import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*----- Left Section ------*/}
        <div>
            <img className='mb-5 w-40' src={assets.group_profiles} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>A doctor appointment booking system is an online system that allows patients to easily book their appointment at a particular clinic related to their health issue</p>
        </div>
         {/*----- Center Section ------*/}
         <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
             {/*----- Right Section ------*/}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>  <a href="https://wa.me/7012949560"> 7012949560 </a></li>
                <li>  <a href="mailto:www.muhammedshahil7012@gmail.com">muhammedshahil7012@gmail.com </a></li>
            </ul>
            </div>
      </div>
      <div>
        {/*------ Copyright Text--------*/}
        <hr />
        <p className='py-5 text-sm text-center'>All Right Reserved Quickcare 2024</p>
      </div>
    </div>
  )
}

export default Footer
