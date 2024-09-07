import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";

const Social = () => {

    const socialLinks = [{link:"https://github.com/kavyesh18",icon:IconBrandGithub},{link:"https://www.linkedin.com/in/badugu-kavyesh-raj-263697246/",icon:IconBrandLinkedin},
        {link:"https://www.instagram.com/kavyesh_raj",icon:IconBrandInstagram},
        {link:"https://leetcode.com/u/kavyesh_raj18/",icon:IconBrandLeetcode}
    ];

    const socialIcons=socialLinks.map((socialLink)=>{
            return <a href={`${socialLink.link}`} target="_blank" className="font-mono-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
             <div data-aos="fade-down-left" data-aos-duratiom="800"> <socialLink.icon  className="-rotate-90" size={30}/></div>
            </a>
    })



    return <div className="flex text-textColor items-center gap-10 fixed bottom-40 -left-40 rotate-90">
        {socialIcons}
        <hr className="border-[2px] w-40 rounded-full text-textColor bg-textColor border-textColor"/>
    </div>
        
        
}

export default Social;