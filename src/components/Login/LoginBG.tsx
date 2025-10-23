import React from "react";
import "@/styles/Login/_LoginBG.scss";

const LoginBG: React.FC = () => {
    return (
        <video
            className="login-bg"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src="/videos/video.webm" type="video/webm" />
            Tu navegador no soporta el video de fondo.
        </video>
    );
};

export default LoginBG;
