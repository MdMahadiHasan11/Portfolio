import { motion } from "framer-motion"
import { useLoaderData } from "react-router-dom";
import Card from "./projectCard/Card";
const Projects = () => {
    const projects = useLoaderData();
    return (
        <div id='projects' className='border-b pt-5 border-neutral-900 pb-14'>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="my-10 text-center text-4xl">


                    My Recent Projects
                    {/* <span className="text-neutral-500">logy</span> */}
                </h2>
            </motion.div>


            {/* body */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className=""
            >

                {/* card 1 */}
                <div className="grid justify-center items-center lg:grid-cols-3 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.name} className="flex justify-center items-center">
                            <Card project={project}></Card>
                        </div>
                    ))}
                </div>

            </motion.div>
        </div>
    );
};

export default Projects;