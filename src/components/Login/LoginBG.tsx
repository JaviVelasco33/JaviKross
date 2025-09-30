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
            <source src="/videos/video.mp4" type="video/mp4" />
            Tu navegador no soporta el video de fondo.
        </video>
    );
};

export default LoginBG;
