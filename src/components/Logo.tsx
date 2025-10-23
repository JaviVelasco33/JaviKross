interface LogoProps {
    className?: string;
    href?: string;
}

const Logo = ({ className, href }: LogoProps) => {
    return (
        <a className={className} href={href}>
            <img
                src="/src/assets/images/logos/LogoJaviKross.webp"
                alt="Logo JaviKross"
                style={{ width: "100%", filter: "drop-shadow(0px 3px 3px #000000)" }}
            />
        </a>
    );
};

export default Logo;