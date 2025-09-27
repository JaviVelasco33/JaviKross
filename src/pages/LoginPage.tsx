import { useNavigate } from "react-router-dom";
import LoginPictures from "../components/Login/LoginPictures";

function LoginPage() {
    const navigate = useNavigate();

    const handleEnter = () => {
        // Por ahora solo navega a /home sin login real
        navigate("/home");
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
            <LoginPictures />
            <h1>Login Page</h1>
            <button onClick={handleEnter} style={{ marginTop: "20px", padding: "10px 20px" }}>
                Entrar
            </button>
        </div>
    );
}

export default LoginPage;
