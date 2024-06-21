import React from "react";
import BoxReveal from "../../components/magicui/box-reveal";
import SparklesText from "../../components/magicui/sparkles-text";
import ShimmerButton from "../../components/magicui/shimmer-button";
import linkedin from "../../static/icons/linkedin.svg";
import github from "../../static/icons/github.svg";
import { NeonGradientCard } from "../../components/magicui/neon-gradient-card";
import ioImage from "../../static/images/io.jpg";

const Button: React.FC<{
    logo_svg: string;
    button_name: string;
    web_link: string;
}> = ({ logo_svg, button_name, web_link }) => {
    return (
        <ShimmerButton
            className="shadow-2xl"
            background="rgba(0, 0, 0, 1)"
            shimmerSize="0.1em"
            borderRadius="60px"
            onClick={() => {
                window.open(web_link, "_blank");
            }}
        >
            <div className="flex flex-row gap-3 items-center justify-center">
                <img src={logo_svg} alt={button_name} className="w-6 h-6" />
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    {button_name}
                </span>
            </div>
        </ShimmerButton>
    );
};

const About: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center  gap-12 w-full">
                <NeonGradientCard className="h-auto object-cover relative w-3/12">
                    <img
                        src={ioImage}
                        alt="IO"
                        className=" w-full h-full object-cover rounded-[20px] overflow-hidden"
                    />
                </NeonGradientCard>

                <div className="h-full w-full max-w-[40rem] flex flex-col gap-3 items-start justify-center overflow-hidden ">
                    <BoxReveal boxColor={"#5046e6"} duration={0.7}>
                        <p className="text-[1.7rem] text-left font-semibold">
                            👋 Hola soy
                        </p>
                    </BoxReveal>
                    <BoxReveal boxColor={"#5046e6"} duration={0.7}>
                        <p className="text-[3.7rem] text-left font-semibold p-0">
                            Edgar Chambilla
                        </p>
                    </BoxReveal>

                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <SparklesText
                            text="Desarrollador Full Stack "
                            className=" text-[2rem]"
                        />
                        {/* <h2 className="mt-[.5rem] text-[2rem]">
                        Full Stack Developer
                        <span className="text-[#5046e6]">Design Engineers</span>
                    </h2> */}
                    </BoxReveal>

                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <p className="text-[1.5rem] text-left font-light">
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
                            <Button
                                button_name="LinkedIn"
                                logo_svg={linkedin}
                                web_link="https://www.linkedin.com/in/edgarchambilla/"
                            />
                            <Button
                                button_name="GitHub"
                                logo_svg={github}
                                web_link="https://github.com/Edgar100800"
                            />
                        </div>
                    </BoxReveal>
                    {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
      </BoxReveal> */}
                </div>
            </div>
        </div>
    );
};

export default About;
