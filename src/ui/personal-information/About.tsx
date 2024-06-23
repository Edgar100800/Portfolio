import React from "react";
import BoxReveal from "../../components/magicui/box-reveal";
import SparklesText from "../../components/magicui/sparkles-text";
import linkedin from "../../static/icons/linkedin.svg";
import github from "../../static/icons/github.svg";
import { NeonGradientCard } from "../../components/magicui/neon-gradient-card";
import ioImage from "../../static/images/io.webp";
import { LogoButton } from "../../components/buttons/logo-button";

const About: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center sm:p-12 gap-4 sm:gap-12 w-full">
                {/* Profile Image */}
                <div className="h-[200px] md:h-[435px]">
                    <NeonGradientCard className="" borderSize={4}>
                        <div className=" h-full aspect-video md:aspect-square  overflow-hidden rounded-2xl">
                            <img
                                src={ioImage}
                                alt="IO"
                                className=" h-full w-full object-cover rounded-[16px] overflow-hidden"
                            />
                        </div>
                    </NeonGradientCard>
                </div>

                {/* Description Anout me */}
                <div className="h-full  max-w-[40rem] flex flex-col gap-3 items-start justify-center overflow-hidden ">
                    <div>
                        <BoxReveal boxColor={"#5046e6"} duration={0.7}>
                            <p className="text-[1.7rem] text-left font-normal sm:font-semibold">
                                👋 Hola soy
                            </p>
                        </BoxReveal>
                        <BoxReveal boxColor={"#5046e6"} duration={0.7}>
                            <p className="text-[3rem] sm:text-[3.7rem] text-left  p-0 ">
                                Edgar Chambilla
                            </p>
                        </BoxReveal>

                        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                            <SparklesText
                                text="Desarrollador Full Stack "
                                className="text-[1.5rem] sm:text-[2rem] text-left "
                            />
                        </BoxReveal>
                    </div>

                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <p className="text-[1.5rem] text-left font-light text-balance">
                            Estudiante de{" "}
                            <span className="font-bold text-[#f7f758]">
                                Ciencias de la Computación
                            </span>{" "}
                            en UTEC. Apasionado por el{" "}
                            <span className="font-bold">
                                {" "}
                                Machine Learning{" "}
                            </span>
                            y la{" "}
                            <span className="font-bold">
                                Arquitectura en la Nube
                            </span>
                            .
                            <br /> He desarrollado aplicaciones web y móviles y
                            me encanta la metodología de startups.
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
            </div>
        </div>
    );
};

export default About;
