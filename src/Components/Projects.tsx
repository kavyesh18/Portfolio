import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div className="px-4 sm:px-8 md:px-16 mx-4 sm:mx-8 md:mx-20 my-10 font-mono" id="Works">
            <h1 className="text-3xl sm:text-4xl mb-5 font-bold text-center text-white">
                <span className="text-primaryColor">02.&nbsp;</span>Works
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    ProjectInfo.map((project:any, index:number)=>
                        <ProjectCard
                            key={index}
                            title={project.title}
                            desc={project.desc}
                            image={project.image}
                            live={project.live}
                            link={project.link}
                            github={project.github}
                            technologies={project.technologies}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Projects;
