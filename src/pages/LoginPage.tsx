import "@/styles/Pages/_LoginPage.scss";
import LoginBG from "../components/Login/LoginBG";
import LoginForm from "../components/Login/LoginForm";
import { Logo } from "../components/Logo";

function LoginPage() {


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
}

export default LoginPage;
