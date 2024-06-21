import React from "react";
import file_certicate from "../../static/icons/file-certificate.svg";

const Projects: React.FC = () => {
    return (
        <div className="max-w-[70rem]">
            <div className="flex flex-row items-center gap-3 mb-8 p-0">
                <img
                    src={file_certicate}
                    alt="Certificate"
                    className="w-14 h-14"
                />
                <h2 className="text-[2.8rem] font-semibold text-gray-900 dark:text-white">
                    Projectos
                </h2>
            </div>

            <ol className="relative ml-[24px] border-s border-gray-200 ">
                <li className="mb-10 ms-4 ">
                    <div className="flex flex-row border-2 border-red-700">
                        <div>
                            <h3 className="text-lg text-left font-semibold text-gray-900 dark:text-white">
                                Application UI code in Tailwind CSS
                            </h3>
                            <p className="text-sm text-left">
                                Get access to over 20+ pages including a
                                dashboard layout, charts, kanban board, calendar,
                                and pre-order E-commerce & Marketing pages.
                            </p>
                            <time className="text-xs">
                                February 2022
                            </time>
                        </div>

                        <div>
                            <p className="text-sm">
                            Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.
                            </p>
                        </div>
                    </div>
                    {/* <div className=" absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white " />
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        February 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Application UI code in Tailwind CSS
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Get access to over 20+ pages including a dashboard
                        layout, charts, kanban board, calendar, and pre-order
                        E-commerce & Marketing pages.
                    </p> */}
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        March 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Marketing UI design in Figma
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        All of the pages and components are first designed in
                        Figma and we keep a parity between the two versions even
                        as we update the project.
                    </p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        April 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        E-Commerce UI code in Tailwind CSS
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Get started with dozens of web components and
                        interactive elements built on top of Tailwind CSS.
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default Projects;
