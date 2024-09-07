import { SkillInfo } from "../User";
import SkillCard from "./SkillCard";

const Skills = () => {
    return (
        <div className="px-4 md:px-16 mx-4 md:mx-20 my-10 font-mono" id="Skills">
            <h1 className="text-3xl md:text-4xl mb-5 font-bold text-center text-white">
                <span className="text-primaryColor">03.&nbsp;</span>Skills
            </h1>
            <div className="flex flex-wrap gap-5 justify-center">
                {SkillInfo.map((skill:any, index:number) => (
                    <SkillCard key={index} title={skill.title} skills={skill.skills}/>
                ))}
            </div>
        </div>
    );
}

export default Skills;