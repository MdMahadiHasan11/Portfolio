import React, { useEffect, useRef } from 'react';

const Details = ({ project, onClose }) => {


    useEffect(() => {

        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    // modal set up
    const modalRef = useRef();
    const closeModel = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }


    return (
        <div ref={modalRef} onClick={closeModel} className='fixed z-50 inset-0 max-w-screen-xl mx-auto bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>

            {/*  */}
            {/*  */}



            <div className=" md:w-3/6 lg:mb-20 lg:mt:8 my-8">

                <button onClick={onClose} className='btn  px-4  bg-slate-400 hover:bg-red-500   place-self-end'>X</button>

                <div className=' rounded-lg flex flex-col gap-5 items-center mx-4 '>
                    {/*  */}


                    <div className="p-10 rounded-2xl border-2 border-black bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] text-black">


                        <div className='text-center'>
                            <p className=' text-xl font-bold'> {project.name}</p>
                            <p>{project.title} <span>{project.project_type}</span></p>
                        </div>
                        <div className='border-b border-neutral-900 mt-8 pb-4'>

                            <div className='flex items-center justify-center gap-4'>
                                <a href={project.links[0]} target='_blank'><span className='btn btn-outline font-bold'>Live Link</span></a>
                                {project.links.length === 3 ?
                                    <> <a href={project.links[1]} target='_blank'><span className='btn btn-outline font-bold'>Server Side Repository</span></a>
                                        <a href={project.links[2]} target='_blank'><span className='btn btn-outline font-bold'>Clint Side Repository</span></a>
                                    </>
                                    :
                                    <a href={project.links[1]} target='_blank'><span className='btn btn-outline font-bold'>GitHub Repository</span></a>
                                }

                            </div>
                        </div>

                        {/* body */}
                        <div>
                            <div className='flex justify-end'>
                                <p>{project.times}</p>
                            </div>

                            <div className=' my-8 '>
                                <p className='font-bold'>Technologies:</p>
                                <p className='lg:ml-9 '>{project.technology}</p>

                            </div>

                            <div>
                                <p className='font-bold'>Features:</p>

                                <ul className='list-disc ml-9'>
                                    {project.features.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>

                            </div>
                        </div>


                    </div>
                    {/*  */}
                </div>
            </div>

        </div >
    );
};

export default Details;