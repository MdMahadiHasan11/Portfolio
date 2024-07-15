import { motion } from "framer-motion"
import { FaUniversity } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
const Education = () => {
    return (
        <div className='border-b pt-5 border-neutral-900 pb-4'>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="my-10 text-center text-4xl">
                    Education
                    {/* <span className="text-neutral-500">logy</span> */}
                </h2>
            </motion.div>
            {/* body */}

            {/* first Exparience */}
            <div>
                <motion.div
                    className="mb-8 flex flex-wrap items-center lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4">
                        <p className="mb-2 text-xl">
                            2019 - 2024
                        </p>

                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 p-10 md:flex justify-center items-center gap-8 ">
                            <div className="text-7xl flex justify-center">
                                <FaUniversity ></FaUniversity>
                            </div>
                            <div>
                                <p className="font-semibold md:text-lg ">Bachelor of Science in Computer Science and Engineering</p>
                                <p className="text-sm mt-4">Pabna University of Science & Technology</p>
                            </div>

                            {/* ex.role -{" "} */}
                            {/* <span className=" text-sm text-purple-100">Company</span> */}

                        </h6>
                    </motion.div>

                </motion.div>

                {/* college */}
                <motion.div
                    className="mb-8 flex flex-wrap items-center lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4">
                        <p className="mb-2 text-xl">
                            2015 - 2017
                        </p>

                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 p-10 md:flex  items-center gap-8 ">
                            <div className="text-7xl flex justify-center">
                                <LuSchool></LuSchool>
                            </div>
                            <div className="">
                                <p className="font-semibold md:text-lg">Higher Secondary Certificate</p>
                                <p className="text-sm mt-4">Ishwardi Govt College, Pabna</p>
                            </div>

                            {/* ex.role -{" "} */}
                            {/* <span className=" text-sm text-purple-100">Company</span> */}

                        </h6>
                    </motion.div>

                </motion.div>
            </div>


        </div>
    );
};
export default Education;