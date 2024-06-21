interface LogoButtonProps {
    logo_svg: string;
    web_link: string;
    button_name: string;
}

export const LogoButton: React.FC<LogoButtonProps> = ({
    logo_svg,
    web_link,
    button_name,
}) => {
    return (
        <a
            href={web_link}
            target="_blank"
            rel="noreferrer"
            className="flex  items-center justify-center  px-4 py-2 bg-[#000000] rounded-md gap-2"
        >
            <img src={logo_svg} alt="logo" className="w-4 h-4" />
            <span className="text-[#ffffff] text-base">{button_name}</span>
        </a>
    );
};

export default LogoButton;
