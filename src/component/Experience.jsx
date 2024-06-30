import { motion } from "framer-motion"
const Experience = () => {
    return (
        <div className='border-b pt-5 border-neutral-900 pb-14'>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="my-10 text-center text-4xl">
                    Experience
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
                            2024 (Fresher)
                        </p>

                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 p-10 flex justify-center items-center gap-8 ">

                            <div>
                                <p className="font-semibold text-lg">
                                    Passionate Learner
                                </p>
                                <p>I am a dedicated and enthusiastic Junior Frontend and Backend Developer with a strong passion for creating
                                    visually appealing and highly functional web applications using React.js. I have developed my skills through
                                    various projects that have prepared me to contribute effectively to a professional development team.</p>
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

export default Experience;