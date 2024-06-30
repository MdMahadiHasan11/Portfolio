import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { animate, motion } from "framer-motion"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { BiLogoMongodb } from "react-icons/bi";
import { DiFirebase } from "react-icons/di";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { SiExpress, SiNetlify, SiVercel } from "react-icons/si";


const Technology = () => {

    const container = (time) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: time,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse'
            }

        },
    })

    return (
        <div id="skills" className='border-b pt-5 border-neutral-900 pb-14'>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="my-10 text-center text-4xl">
                    My Skills
                    {/* <span className="text-neutral-500">logy</span> */}
                </h2>
            </motion.div>
            {/* body */}

            {/* skills */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="">
                {/* 1st */}
                <div className=" mb-10 flex justify-center items-center" >
                    <div
                        style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                        className="lg:grid  md:grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-10 py-5 ">
                        <div className="">
                            <div className="flex justify-between font-bold w-56"><p>React</p> <p>82%</p></div>
                            <progress className="progress progress-success w-56" value="82" max="100"></progress>
                        </div>
                        <div className="">
                            <div className="flex justify-between font-bold w-56"><p>JavaScript</p> <p>75%</p></div>
                            <progress className="progress progress-success w-56" value="75" max="100"></progress>
                        </div>
                        <div className="">
                            <div className="flex justify-between font-bold w-56"><p>Tailwind</p> <p>82%</p></div>
                            <progress className="progress progress-success w-56" value="82" max="100"></progress>
                        </div>
                        <div className="">
                            <div className="flex justify-between font-bold w-56"><p>CSS3</p> <p>75%</p></div>
                            <progress className="progress progress-success w-56" value="75" max="100"></progress>
                        </div>
                        <div className="">
                            <div className="flex justify-between font-bold w-56"><p>HTML5</p> <p>80%</p></div>
                            <progress className="progress progress-success w-56" value="80" max="100"></progress>
                        </div>
                        <div className="">
                            <div className="flex justify-between font-bold w-56"><p>Firebase</p> <p>70%</p></div>
                            <progress className="progress progress-success w-56" value="70" max="100"></progress>
                        </div>

                        <div >
                            <div className="flex justify-between font-bold w-56"><p>MongoDB</p> <p>75%</p></div>
                            <progress className="progress progress-success w-56" value="75" max="100"></progress>
                        </div>
                        <div className="">
                            <div className="flex justify-between font-bold w-56"><p>Node.JS</p> <p>65%</p></div>
                            <progress className="progress progress-success w-56" value="65" max="100"></progress>
                        </div>
                        <div className="">
                            <div className="flex justify-between font-bold w-56"><p>Express.JS</p> <p>65%</p></div>
                            <progress className="progress progress-success w-56" value="65" max="100"></progress>
                        </div>
                    </div>
                </div>

                {/* 1st end */}

            </motion.div>




            {/* 2nd */}
            

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
            >
                <>
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={2000} // Transition duration (2000 ms = 2 seconds)
                        freeMode={true}
                        freeModeMomentum={false}
                        breakpoints={{
                            '@0.00': { // For very small screens
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            '@0.50': { // For small screens
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            '@0.75': { // For medium-small screens
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            '@1.00': { // For medium screens
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                            '@1.50': { // For large screens
                                slidesPerView: 6,
                                spaceBetween: 40,
                            },
                            '@2.00': { // For very large screens
                                slidesPerView: 8,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {/* 1 */}
                        <SwiperSlide className=" my-4">
                            <motion.div
                                variants={container(1.5)}
                                initial='initial'
                                animate='animate'
                                style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                                className=" flex flex-col justify-center items-center rounded-2xl  py-4" >
                                <RiReactjsLine className="text-7xl text-blue-500"></RiReactjsLine>
                                <p>React</p>
                            </motion.div>
                        </SwiperSlide>

                        {/* 2 */}
                        <SwiperSlide className=" my-4">
                            <motion.div
                                variants={container(2)}
                                initial='initial'
                                animate='animate'
                                style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                                className=" flex flex-col justify-center items-center rounded-2xl  py-4" >
                                <TbBrandJavascript className="text-7xl text-yellow-500" />
                                <p>JavaScript</p>
                            </motion.div>
                        </SwiperSlide>

                        {/* 3 */}
                        <SwiperSlide className=" my-4">
                            <motion.div
                                variants={container(2.5)}
                                initial='initial'
                                animate='animate'
                                style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                                className=" flex flex-col justify-center items-center rounded-2xl  py-4" >
                                <BiLogoMongodb className="text-7xl text-green-500" />
                                <p>MongoDB</p>
                            </motion.div>
                        </SwiperSlide>

                        {/* 4 */}
                        <SwiperSlide className=" my-4">
                            <motion.div
                                variants={container(1.5)}
                                initial='initial'
                                animate='animate'
                                style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                                className=" flex flex-col justify-center items-center rounded-2xl  py-4" >
                                <DiFirebase className="text-7xl text-orange-500" />
                                <p>Firebase</p>
                            </motion.div>
                        </SwiperSlide>

                        {/* 5 */}
                        <SwiperSlide className=" my-4">
                            <motion.div
                                variants={container(2)}
                                initial='initial'
                                animate='animate'
                                style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                                className=" flex flex-col justify-center items-center rounded-2xl  py-4" >
                                <RiTailwindCssFill className="text-7xl text-teal-500"></RiTailwindCssFill>
                                <p>Tailwind CSS</p>
                            </motion.div>
                        </SwiperSlide>

                        {/* 6 */}
                        <SwiperSlide className=" my-4">
                            <motion.div
                                variants={container(2.5)}
                                initial='initial'
                                animate='animate'
                                style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                                className=" flex flex-col justify-center items-center rounded-2xl  py-4" >
                                <IoLogoCss3 className="text-7xl text-blue-600"></IoLogoCss3>
                                <p>CSS3</p>
                            </motion.div>
                        </SwiperSlide>

                        {/* 7 */}
                        <SwiperSlide className=" my-4">
                            <motion.div
                                variants={container(1.5)}
                                initial='initial'
                                animate='animate'
                                style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                                className=" flex flex-col justify-center items-center rounded-2xl  py-4" >
                                <IoLogoHtml5 className="text-7xl text-red-600"></IoLogoHtml5>
                                <p>HTML5</p>
                            </motion.div>
                        </SwiperSlide>

                        {/* 8 */}
                        <SwiperSlide className=" my-4">
                            <motion.div
                                variants={container(2)}
                                initial='initial'
                                animate='animate'
                                style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                                className=" flex flex-col justify-center items-center rounded-2xl  py-4" >
                                <FaNodeJs className="text-7xl text-green-600"></FaNodeJs>
                                <p>Node.JS</p>
                            </motion.div>
                        </SwiperSlide>

                        {/* 9 */}
                        <SwiperSlide className=" my-4">
                            <motion.div
                                variants={container(2.5)}
                                initial='initial'
                                animate='animate'
                                style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                                className=" flex flex-col justify-center items-center rounded-2xl  py-4" >
                                <SiExpress className="text-7xl text-gray-500"></SiExpress>
                                <p>Express.JS</p>
                            </motion.div>
                        </SwiperSlide>

                        {/* 10 */}
                        <SwiperSlide className=" my-4">
                            <motion.div
                                variants={container(1.5)}
                                initial='initial'
                                animate='animate'
                                style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                                className=" flex flex-col justify-center items-center rounded-2xl  py-4" >
                                <GrGithub className="text-7xl text-black"></GrGithub>
                                <p>GitHub</p>
                            </motion.div>
                        </SwiperSlide>

                        {/* 11 */}
                        <SwiperSlide className=" my-4">
                            <motion.div
                                variants={container(2)}
                                initial='initial'
                                animate='animate'
                                style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                                className=" flex flex-col justify-center items-center rounded-2xl  py-4" >
                                <VscVscode className="text-7xl text-blue-700"></VscVscode>
                                <p>VS Code</p>
                            </motion.div>
                        </SwiperSlide>

                        {/* 12 */}
                        <SwiperSlide className=" my-4">
                            <motion.div
                                variants={container(2.5)}
                                initial='initial'
                                animate='animate'
                                style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                                className=" flex flex-col justify-center items-center rounded-2xl  py-4" >
                                <SiVercel className="text-7xl text-black"></SiVercel>
                                <p>Vercel</p>
                            </motion.div>
                        </SwiperSlide>

                        {/* 13 */}
                        <SwiperSlide className=" my-4">
                            <motion.div
                                variants={container(2)}
                                initial='initial'
                                animate='animate'
                                style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                                className=" flex flex-col justify-center items-center rounded-2xl  py-4" >
                                <SiNetlify className="text-7xl text-blue-500"></SiNetlify>
                                <p>Netlify</p>
                            </motion.div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </motion.div>





        </div>
    );
};

export default Technology;