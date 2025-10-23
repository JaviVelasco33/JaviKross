import "@/styles/Pages/_LoginPage.scss";
import { useEffect } from "react";
import LoginBG from "../components/Login/LoginBG";
import LoginForm from "../components/Login/LoginForm";
import Logo from "../components/Logo";

const LoginPage = () => {
    useEffect(() => {
        document.title = "JaviKross | Login";
    }, []);

    return (
        <div className="login-page">
            <LoginBG />
            <div className="login-content">
                    <Logo  className="logo-login"/>
                    <LoginForm />
            </div>
            <div className="neon-bg">
                <div className="neon-border"></div>
            </div>
        </div>
    );
};

export default LoginPage;
