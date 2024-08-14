import React from "react";
import BoxReveal from "../../components/magicui/box-reveal";
import SparklesText from "../../components/magicui/sparkles-text";
import linkedin from "../../static/icons/linkedin.svg";
import github from "../../static/icons/github.svg";
import { NeonGradientCard } from "../../components/magicui/neon-gradient-card";
import ioImage from "../../static/images/io.webp";
import { LogoButton } from "../../components/buttons/logo-button";
import Tecnologies from "./Tecnologies";



const About: React.FC = () => {


    return (
        <div>
            <div className="flex flex-col 
                            md:flex-row md:justify-center md:items-center gap-4 w-full px-[14px] 
                            sm:p-12 sm:px-0 sm:gap-12">
                {/* Profile Image */}
                {/* <div className="h-[190px] md:h-[435px] border-2 border-yellow-500"> */}
                    <NeonGradientCard className="w-auto" borderSize={4}>
                        <div className=" max-h-[412px] aspect-video overflow-hidden rounded-2xl
                                         md:aspect-square">
                            <img
                                src={ioImage}
                                alt="IO"
                                className="h-full w-full object-cover rounded-[16px] overflow-hidden"
                            />
                        </div>
                    </NeonGradientCard>
                {/* </div> */}

                {/* Description Anout me */}
                <div className="h-full  max-w-[40rem] flex flex-col gap-3 items-start justify-center overflow-hidden ">
                    <div className="">
                        <BoxReveal boxColor={"#5046e6"} duration={0.7}>
                            <p className="text-[1.2rem] text-left font-normal sm:font-semibold
                                        sm:text-[1.7rem] ">
                                👋 Hello I'm
                            </p>
                        </BoxReveal>
                        <BoxReveal boxColor={"#5046e6"} duration={0.7}>
                            <p className="text-[2.2rem]  text-left  p-0 
                                          sm:text-[3.7rem]">
                                Edgar Chambilla
                            </p>
                        </BoxReveal>

                        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                            <SparklesText
                                text="Full Stack developer"
                                className="text-[1.8rem] text-left 
                                           sm:text-[2rem] "
                            />
                        </BoxReveal>
                    </div>

                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <p className="text-[1.2rem] text-left font-light text-balance
                                    sm:text-[1.5rem]">
                            Student of{" "}
                            <span className="font-bold text-[#f7f758]">
                                Computer Science
                            </span>{" "}
                            at UTEC. Passionate about{" "}
                            <span className="font-bold">
                                {" "}
                                Machine Learning{" "}
                            </span>
                            and{" "}
                            <span className="font-bold">
                                Cloud Architecture
                            </span>
                            .
                            <br /> I have developed web and mobile applications and
                            I love the startup methodology.
                            {/* <span className="text-[#5046e6]">.</span> */}
                        </p>
                    </BoxReveal>


                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <div className="flex flex-row gap-4">
                            <LogoButton
                                logo_svg={linkedin}
                                web_link="https://www.linkedin.com/in/edgarchambilla/"
                                button_name="LinkedIn"
                            />
                            <LogoButton
                                logo_svg={github}
                                web_link="https://github.com/Edgar100800"
                                button_name="GitHub"
                            />
                        </div>
                    </BoxReveal>
                </div>

                {/* <Tecnologies tecnologiesNames={tecnologies}/> */}
            </div>
        </div>
    );
};

export default About;
