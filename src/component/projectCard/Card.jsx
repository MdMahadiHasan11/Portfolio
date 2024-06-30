import { useState } from "react";
import { FaEye } from "react-icons/fa";
import Details from "./Details";

const Card = ({ project }) => {
    const [modal, setModal] = useState(false)
    return (
        <div >
            <button 
                onClick={() => setModal(true)} 
                className="transition-transform   duration-300 ease-in-out transform hover:scale-105"
                style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
            >
                <div className="py-4">
                    <p className=" text-lg font-medium">{project.title}</p>
                    <p className="">{project.project_type}</p>
                </div>

                <div className=" card-compact bg-base-100  ">
                    <figure>

                        <img className=""
                            src={project.images[0]} />
                    </figure>
                </div>


            </button>
            {modal && <Details className='py-20' project={project} onClose={() => setModal(false)}></Details>}

        </div>
    );
};

export default Card;