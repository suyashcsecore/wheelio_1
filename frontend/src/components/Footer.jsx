import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react' // motion
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()
  return (
    <motion.div 
    initial={{opacity: 0, y: 30}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.6}}
    className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>
            <motion.div 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
                <div>
                    <motion.img 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.2}}
                    whileHover={{scale: 1.1}}
                    src={assets.logo1} alt="logo" className='h-8 md:h-9' />
                    <motion.p 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.4}}
                    className='max-w-80 mt-3'>
                        Reliable car rental service offering a wide range of vehicles, from everyday rides to premium experiences, for every journey.
                    </motion.p>
                    <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='flex items-center gap-3 mt-6'>

                        <motion.a whileHover={{scale: 1.3}} href="https://facebook.com"><img src={assets.facebook_logo} className='w-5 h-5' alt="facebook_logo" /></motion.a>
                        <motion.a whileHover={{scale: 1.3}} href="https://instagram.com"><img src={assets.instagram_logo} className='w-5 h-5' alt="instagram_logo" /></motion.a>
                        <motion.a whileHover={{scale: 1.3}} href="https://x.com"><img src={assets.twitter_logo} className='w-5 h-5' alt="twitter_logo" /></motion.a>
                        <motion.a whileHover={{scale: 1.3}} href="https://gmail.com"><img src={assets.gmail_logo} className='w-5 h-5' alt="gmail_logo" /></motion.a>
                        
                    </motion.div>
                </div>


                <motion.div 
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.4}}
                className='flex flex-wrap justify-between w-1/2 gap-8'>
                <div>
                <h2 className='text-base font-medium text-gray-800 uppercase'>
                    Quick Links
                </h2>

                <ul className='mt-3 flex flex-col gap-1.5'>
                    <motion.li whileHover={{scale: 1.2}} onClick={() => {
                        navigate('/')
                        window.scrollTo(0, 0);
                        }} className='cursor-pointer'>
                        Home
                    </motion.li>
                    <motion.li whileHover={{scale: 1.2}} onClick={() => {
                        navigate('/cars')
                        window.scrollTo(0, 0);
                        }} className='cursor-pointer'>
                        Browse Cars
                    </motion.li>
                    <motion.li whileHover={{scale: 1.2}} onClick={() => {
                        navigate('/my-bookings')
                        window.scrollTo(0, 0);
                        }} className='cursor-pointer'>
                        List Your Car
                    </motion.li>
                    <motion.li whileHover={{scale: 1.2}} onClick={() => {
                        navigate('/')
                        window.scrollTo(0, 0);
                        }} className='cursor-pointer'>
                        About Us
                    </motion.li>
                </ul>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <motion.li whileHover={{scale: 1.2}}><a href="#">Help Center</a></motion.li>
                        <motion.li whileHover={{scale: 1.2}}><a href="#">Terms of Service</a></motion.li>
                        <motion.li whileHover={{scale: 1.2}}><a href="#">Privacy Policy</a></motion.li>
                        <motion.li whileHover={{scale: 1.2}}><a href="#">Insurance</a></motion.li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li>9841 Cybercity</li>
                        <li>Mumbai, MA 94107</li>
                        <li>+91 96961 XXXXX</li>
                        <li>wheelio@ride.com</li>
                    </ul>
                </div>

                </motion.div>

            </motion.div>

            <motion.div 
            initial={{opacity: 0, y: 10}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.6}}
            className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <motion.li whileHover={{scale: 1.2}}><a href="#">Privacy</a></motion.li>
                    <li>|</li>
                    <motion.li whileHover={{scale: 1.2}}><a href="#">Terms</a></motion.li>
                    <li>|</li>
                    <motion.li whileHover={{scale: 1.2}}><a href="#">Cookies</a></motion.li>
                </ul>
            </motion.div>
        </motion.div>
  )
}

export default Footer