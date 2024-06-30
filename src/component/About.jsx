import { FaDownload } from 'react-icons/fa';
import aboutImg from '../assets/projects/about.jpg'
import { motion } from "framer-motion"


const About = () => {


    const fileId = '1oNUGP8H-CfbTWsUVvSRu_KR6DRUu7SFC';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;



    return (
        <div id='about'  className='border-b pt-5 border-neutral-900 pb-4'>
            <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                <h2  className="my-10 text-center text-4xl">

                    About Me
                    {/* <span className="text-neutral-500">logy</span> */}
                </h2>
            </motion.div>



            {/* body */}

            <div  className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}

                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <p> <span className='text-3xl font-bold'>Hi , I'm Md Mahadi Hasan</span> a passionate MERN stack developer with a strong foundation in modern web development technologies. My expertise lies in crafting scalable web applications using React.js, JavaScript (ES6+), and Tailwind CSS for sleek, responsive designs. With a solid grasp of HTML5 and CSS3, I ensure seamless integration of UI/UX principles into every project.

                            <p className='mt-4'> In backend development, I leverage the power of MongoDB for efficient data management and Firebase for real-time database capabilities. My server-side proficiency includes Node.js and Express.js, allowing me to build robust APIs and deliver optimal performance.</p></p>


                    </div>
                    <div className='flex  gap-4 mt-8'>
                        <a
                            href={downloadUrl}
                            target="_blank"
                            className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors duration-300 ease-in-out flex justify-center items-center"
                        >
                            <FaDownload className='mr-2' />Download Resume
                        </a>
                        <a
                            href={downloadUrl}
                            target="_blank"
                            className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors duration-300 ease-in-out flex justify-center items-center"
                        >
                            <FaDownload className='mr-2' />Download CV
                        </a>
                    </div>

                </motion.div>





                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}

                    className="w-full lg:w-1/2" >
                    <div 
                    style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                    className='p-10 mt-6'>
                        <p className='text-lg font-semibold'>
                        Why Hire Me?
                        </p>
                        <ul className='list-disc ml-16'>
                            <li>Expertise in Modern Web Development</li>
                            <li>Full-Stack Capabilities</li>
                            <li>Commitment to Quality</li>
                            <li>Collaborative Team Player</li>
                            <li>Adaptability and Flexibility</li>
                            <li>Passion for Learning</li>
                        </ul>

                    </div>
                </motion.div>

            </div>

        </div>
    );
};

export default About;