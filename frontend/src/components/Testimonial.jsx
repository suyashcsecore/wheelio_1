import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';
import { motion } from 'motion/react';

const Testimonial = () => {

    const testimonials = [
        { name: "Emma Rodriguez", 
          location: "Barcelona, Spain",
          image: assets.testimonial_image_1,
          testimonial: "Wheelio exceeded my expectations with its easy booking process, well-maintained vehicles, and excellent customer support throughout my trip." 
        },
        { name: "John Smith", 
          location: "New York, USA",
          image: assets.user_profile,
          testimonial: "From doorstep delivery to hassle-free returns, Wheelio provided an outstanding rental experience. I couldn't have asked for a smoother trip." 
        },
        { name: "Ava Johnson", 
          location: "Sydney, Australia",
          image: assets.testimonial_image_2,
          testimonial: "I highly recommend Wheelio! Their wide selection of vehicles, competitive pricing, and exceptional customer service make every rental experience enjoyable and stress-free." 
        }
    ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">

        <Title title="What Our Customers Say" subTitle="Experience the freedom of the road with Wheelio, offering trusted vehicles, competitive pricing, and hassle-free rentals wherever your journey takes you."/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18 transition-all">
                {testimonials.map((testimonial, index) => (
                    <motion.div 
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: index * 0.2, ease: "easeOut"}}
                    viewport={{once: true, amount: 0.3}}
                    key={index} className="bg-white p-6 rounded-xl shadow-lg hover:translate-y-1 transition-all duration-500">

                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="star_icon" />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial