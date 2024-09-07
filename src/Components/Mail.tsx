const Mail = () => {
    return <div className="flex text-textColor items-center gap-10 fixed bottom-32 -right-44 rotate-90">
        <div data-aos="fade-down-left" data-aos-duratiom="800">
        <a href='mailto:kavyesh.badugu@gmail.com' className="font-mono text-lg tracking-widest hover:text-primaryColor hover:-translate-x-2 transition transform
        duration-300 ease-in-out">
            kavyesh.badugu@gmail.com
        </a>
        </div>
        <hr className="border-[2px] w-40 rounded-full text-textColor bg-textColor border-textColor"/>
    </div>
        
}

export default Mail;