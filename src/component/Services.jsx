import { FaDownload } from 'react-icons/fa';
import { motion } from "framer-motion"


const Services = () => {


    const fileId = '1oNUGP8H-CfbTWsUVvSRu_KR6DRUu7SFC';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;



    return (
        <div id='services' className='border-b pt-5 border-neutral-900 pb-14 mb-2'>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="my-10 text-center text-4xl">

                    Services
                    {/* <span className="text-neutral-500">logy</span> */}
                </h2>
            </motion.div>



            {/* body */}

            <div className="flex justify-center flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: .5 }}

                    className="" >
                    <div
                        style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                        className='p-10 mt-6'>
                        <p className='text-lg mb-2 font-semibold'>
                            Front-end Development
                        </p>
                        <ul className='list-disc ml-16'>
                            <li>Responsive web design</li>
                            <li>User-friendly interfaces</li>
                            <li>Interactive user experiences</li>
                            <li>Performance optimization techniques</li>
                            <li>Cross-browser compatibility testing</li>
                        </ul>

                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: .5 }}

                    className="" >
                    <div
                        style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                        className='p-10 mt-6'>
                        <p className='text-lg mb-2 font-semibold'>
                            Back-end Development
                        </p>
                        <ul className='list-disc ml-16'>
                            <li>Server-side scripting</li>
                            <li>Database management systems</li>
                            <li>API development practices</li>
                            <li>Data security protocols</li>
                            <li>Application performance optimization</li>

                        </ul>

                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: .5 }}

                    className="" >
                    <div
                        style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                        className='p-10 mt-6'>
                        <p className='text-lg mb-2 font-semibold'>
                            Full-stack Development
                        </p>
                        <ul className='list-disc ml-16'>
                            <li>End-to-end application development</li>
                            <li>Front-end and back-end integration</li>
                            <li>Database design and management</li>
                            <li>API development and consumption</li>
                            <li>Version control systems expertise</li>
                        </ul>

                    </div>
                </motion.div>

            </div>

        </div>
    );
};

export default Services;