interface LogoProps {
    className?: string;
    href?: string;
}

export function Logo({ className, href }: LogoProps) {
    return (
        <a className={className} href={href}>
            <img
                src="/src/assets/images/logos/LogoJaviKross.png"
                alt="Logo JaviKross"
                style={{ width: "100%", filter: "drop-shadow(0px 3px 3px #000000)" }}
            />
        </a>
    );
}
