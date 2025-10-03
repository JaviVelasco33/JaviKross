import "@/styles/Pages/_LoginPage.scss";
import { useNavigate } from "react-router-dom";
import LoginBG from "../components/Login/LoginBG";
import LoginForm from "../components/Login/LoginForm";
import { Logo } from "../components/Logo";

function LoginPage() {
    const navigate = useNavigate();

    const handleEnter = () => {
        // Por ahora solo navega a /home sin login real
        navigate("/home");
    };

    return (
        <div className="login-page">
            <LoginBG />

            <div className="login-content">
                    <Logo />
                    <LoginForm />
                    <button className="login-button" onClick={handleEnter}>
                        Entrar
                    </button>
            </div>
            <div className="neon-bg">
                <div className="neon-border"></div>
            </div>
            

        </div>
    );
}

export default LoginPage;
