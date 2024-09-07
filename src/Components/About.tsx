import { Info } from "../User";
import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import profile from "../profile.jpg";
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./magicui/Particles";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

const About = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div
        data-aos="zoom-out-up"
        data-aos-duration="800"
        className="flex flex-col md:flex-row relative px-10 py-10 h-fit items-center justify-center md:justify-between font-mono overflow-hidden"
        id="bg"
      >
        <Particles
          className="absolute -z-20 inset-0"
          quantity={1000}
          ease={80}
          vx={0.1}
          vy={0.1}
          color="#64FFDA"
          refresh
        />
        <div className="w-full md:w-3/5 flex flex-col gap-3 items-center md:items-start px-4 md:px-0 md:ml-20">
          <div className="text-xl sm:text-2xl lg:text-3xl text-primaryColor mb-2">
            Hi, I am
          </div>
          <div className="text-white text-3xl sm:text-4xl lg:text-[4.0rem] font-bold text-center md:text-left">
            {Info.name}
          </div>
          <div className="text-white text-lg sm:text-xl lg:text-3xl flex mb-4 text-center md:text-left">
            I'm a&nbsp;
            <span className="text-primaryColor font-semibold">
              <Typewriter options={{ strings: Info.stack, autoStart: true, loop: true }} />
            </span>
          </div>
          <div className="text-textColor text-base sm:text-lg lg:text-xl my-4 lg:my-8 font-semibold text-center md:text-left px-4 md:px-0 md:pr-4 lg:pr-0 max-w-full md:max-w-[90%]">
            {Info.bio}
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button
              onClick={open}
              className="!text-bgcolor !w-fit"
              size="lg"
              variant="filled"
              color="#64FFDA"
            >
              Check Resume
            </Button>

            <Button
              component="a"
              href={`${process.env.PUBLIC_URL}/Badugu_Kavyesh_Raj.pdf`}
              download={Info.name}
              className="!text-primaryColor !w-fit"
              size="lg"
              variant="outline"
              color="#64FFDA"
              rightSection={<IconDownload size={14} />}
            >
              Download
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-0 w-full md:w-auto md:mr-14">
          <NeonGradientCard className="w-[250px] sm:w-[275px] md:w-[300px] lg:w-[325px] h-[250px] sm:h-[275px] md:h-[300px] lg:h-[325px] items-center justify-center text-center">
            <img className="w-full h-full rounded-full" src={profile} alt="Profile" />
          </NeonGradientCard>
        </div>
      </div>
      <ResumeViewer opened={opened} close={close} />
    </>
  );
};

export default About;
