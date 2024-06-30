
import { ReactTyped } from 'react-typed';
import img from '../assets/projects/kevinRushProfile.png'
import { motion } from "framer-motion"
import { FaDownload, FaFacebook, FaGithub, FaHireAHelper, FaLinkedin } from 'react-icons/fa';



const Banner = () => {
    const fileId = '1oNUGP8H-CfbTWsUVvSRu_KR6DRUu7SFC';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const container = (time) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: time }

        },
    })


    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                            className="pb-10 md:text-6xl text-4xl  font-semibold tracking-tight lg:mt-16">
                            Mahadi Hasan
                            {/* <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
                                <path
                                    stroke="currentColor"
                                    d="M9.5 14.5h4a1 1 0 001-1v-12a1 1 0 00-1-1h-4a1 1 0 00-1 1v12a1 1 0 001 1zm0 0H4m2.5-3v3m2-9h6m-4.5 6h3m-11.5-8h7v8h-7a1 1 0 01-1-1v-6a1 1 0 011-1z"
                                />
                            </svg> */}
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate='visible'
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text md:text-4xl text-2xl   tracking-tight text-transparent">
                            {/* Full Stack Developer */}
                            <ReactTyped
                                strings={[
                                    "Full Stack Developer",
                                    "Web Developer",
                                    "Front-End Developer",
                                    "React Developer",
                                    "Software Developer",
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                // attr="placeholder"
                                loop={true}
                            ></ReactTyped>

                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate='visible'

                            className="my-2    max-w-xl  font-light tracking-tighter">
                            I'm  committed to delivering dynamic, responsive, and intuitive user interfaces that enhance the overall user experience and satisfaction.
                        </motion.p>


                        <div className="flex justify-center items-center my-4 gap-3">
                                <a href="https://www.facebook.com/HasanGulabo/" target="_blank" rel="noopener noreferrer" className=" text-2xl">
                                    <FaFacebook />
                                </a>
                                <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/MdMahadiHasan11" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl">
                                    <FaGithub />
                                </a>
                               
                            </div>


                        <motion.p variants={container(1.5)} initial="hidden" animate='visible' className="pb-8 my-2 flex justify-center items-center gap-4">
                            <div className=' w-32 '>
                                <a
                                    href={downloadUrl}
                                    target="_blank"
                                    className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors duration-300 ease-in-out flex justify-center items-center"
                                >
                                    <FaDownload className='mr-2' />CV
                                </a>
                            </div>
                            <div className=' w-32 '>
                                <a
                                    href='#contract'
                                    className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors duration-300 ease-in-out flex justify-center items-center"
                                >
                                    <FaHireAHelper className='' />Hire Me
                                    
                                </a>
                            </div>

                        </motion.p>




                    </div>

                </div>
                <div className=" w-full lg:w-1/2 md:p-14 lg:p-24 p-10">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                            className='rounded-full' src='https://i.ibb.co/tXmcsDh/IMG20211202111133.jpg' alt="Mahadi Hasan Image" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;