import { Avatar } from "@mantine/core";

const SkillBadge = ({ skills }: { skills: string[] }) => {
    return skills.map((skill, index) => (
        <div key={index} className="flex gap-2 border text-textColor rounded-2xl items-center py-1 px-2 md:py-2 md:px-3">
            <Avatar className="!w-[20px] !p-1 md:!w-[24px]" variant="transparent" radius="xs" src={`Icons/${skill}.png`} />
            <div className="text-textColor text-sm md:text-xl font-medium">
                {skill}
            </div>
        </div>
    ));
}

const SkillCard = (props: { title: string; skills: string[] }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            className="w-full md:w-[49%] rounded-2xl shadow-[0_0_10px_0_#64FFDA50] border border-primaryColor p-4 md:p-5"
        >
            <div className="text-lg md:text-2xl mb-3 md:mb-4 text-white text-center font-bold">
                {props.title}
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                {SkillBadge({ skills: props.skills })}
            </div>
        </div>
    );
}

export default SkillCard;
