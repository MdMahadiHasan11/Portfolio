

const Navbar = () => {

    return (
        <div className="flex  items-center justify-between pt-6">
            <div>
                <p className="text-xl font-bold"></p>
            </div>

            <div className="p-4 md:space-x-6 space-x-3 font-semibold">
                <a href="#home" className='text-cyan-500'> Home</a>
                <a href="#about" >About Me</a>
                <a href="#skills">Skills</a>
                <a href="#services">Services</a>
                <a href="#projects" >Projects</a>
                <a href="#contract">Contract</a>

                {/* <p>React</p> */}
            </div>
        </div>

    );
};

export default Navbar;