import React from "react";

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <div className={className}>
            <img
                src="/src/assets/images/logos/LogoJaviKross.png"
                alt="Logo JaviKross"
                style={{ width: "100%", filter: "drop-shadow(0px 3px 3px #000000)" }}
            />
        </div>
    );
}
