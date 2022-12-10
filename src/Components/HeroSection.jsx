import React from 'react';
import './HeroSection.css'
import 'animate.css';
import Typewriter from 'typewriter-effect';
import heroImg from '../assets/HeroImg/heroImg.jpg'

const HeroSection = () => {
    return (
        <div className='h-screen'>
            <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto'>
                <div className='lg:h-4/5' >
                    <div>
                        <div id='text-container' className='flex flex-col justify-center items-center h-full mt-24 lg:pt-12' >
                            <div className='flex items-center gap-2'>
                                <h1 className='bg-pink-500' style={{ height: '2px', width: '40px' }}></h1>
                                <h1 className='text-white font-semibold sourceSans text-xl'>Hello I'm</h1>
                            </div>
                            <h1 class="px-glitchtext px-glitchtext-anim text-yellow-300 text-left lg:text-6xl text-4xl">Md. Farhan Sadiq</h1>
                            <span className='text-white font-bold mb-2 md:text-3xl text-xl uppercase'>
                                <Typewriter
                                    options={{
                                        strings: ['mern Developer', 'React Developer', 'Frontend Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                            <a className='btn rounded-none' href="https://youtube.com/c/shortcode" target="_blank">
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div class="box">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src={heroImg} alt="" className='mx-auto h-4/5' />
                </div>
            </div>
        </div >
    );
};

export default HeroSection;