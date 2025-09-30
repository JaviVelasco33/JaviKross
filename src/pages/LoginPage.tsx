import { useNavigate } from "react-router-dom";
import LoginPictures from "../components/Login/LoginPictures";
import LoginForm from "../components/Login/LoginForm";
import LoginBG from "../components/Login/LoginBG";
import "@/styles/Pages/_LoginPage.scss";

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
                <LoginPictures />
                <h1>Login Page</h1>
                <LoginForm />
                <button className="login-button" onClick={handleEnter} style={{ marginTop: "20px", padding: "10px 20px" }}>
                    Entrar
                </button>
            </div>

        </div>
    );
}

export default LoginPage;
