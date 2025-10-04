import React from "react";
import { useNavigate } from "react-router-dom";
import "@/styles/Login/_LoginForm.scss";


const LoginForm: React.FC = () => {
    const navigate = useNavigate();

    const handleEnter = () => {
        // Por ahora solo navega a /home sin login real
        navigate("/home");
    };

    return (
        <div className="login-form-div">
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Usuario</label>
                    <input type="text" id="username" placeholder="Tu nombre de usuario" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" placeholder="Tu contraseña" />
                </div>
            </form>
            <button className="login-button" onClick={handleEnter}>
                Entrar
            </button>
        </div>
    );
};

export default LoginForm;
